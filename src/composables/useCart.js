import { computed, reactive, watch } from 'vue'
import { foodsById } from '../data/foods'

const STORAGE_KEY = 'foodiehub_cart_v1'

// Shared singleton cart state across the app.
const cartState = reactive({
  items: [], // [{ id: string, quantity: number }]
})

function safeParseCart(raw) {
  try {
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed
      .filter((x) => x && typeof x.id === 'string')
      .map((x) => ({
        id: x.id,
        quantity: Number.isFinite(Number(x.quantity)) ? Math.max(1, Number(x.quantity)) : 1,
      }))
  } catch {
    return []
  }
}

function loadCart() {
  if (typeof window === 'undefined') return
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    cartState.items = safeParseCart(raw)
  } catch {
    // Ignore storage errors (private mode, blocked storage, etc.)
  }
}

loadCart()

watch(
  () => cartState.items,
  (items) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // Ignore storage errors.
    }
  },
  { deep: true }
)

export default function useCart() {
  const cartCount = computed(() =>
    cartState.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  const cartLines = computed(() =>
    cartState.items
      .map((item) => ({
        ...item,
        food: foodsById[item.id],
      }))
      .filter((line) => Boolean(line.food))
  )

  const cartTotal = computed(() =>
    cartLines.value.reduce((sum, line) => sum + line.food.price * line.quantity, 0)
  )

  function addToCart(foodId, quantity = 1) {
    const food = foodsById[foodId]
    if (!food) return

    const q = Math.max(1, Math.floor(Number(quantity) || 1))
    const existing = cartState.items.find((x) => x.id === foodId)
    if (existing) existing.quantity += q
    else cartState.items.push({ id: foodId, quantity: q })
  }

  function updateQuantity(foodId, quantity) {
    const q = Math.floor(Number(quantity))
    if (!Number.isFinite(q) || q <= 0) {
      removeFromCart(foodId)
      return
    }

    const existing = cartState.items.find((x) => x.id === foodId)
    if (existing) existing.quantity = q
  }

  function removeFromCart(foodId) {
    const idx = cartState.items.findIndex((x) => x.id === foodId)
    if (idx !== -1) cartState.items.splice(idx, 1)
  }

  function clearCart() {
    cartState.items.splice(0, cartState.items.length)
  }

  return {
    cartState,
    cartLines,
    cartCount,
    cartTotal,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  }
}

