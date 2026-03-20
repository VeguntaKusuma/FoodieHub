<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { formatPrice } from '../utils/format'
import useCart from '../composables/useCart'

const props = defineProps({
  food: {
    type: Object,
    required: true,
  },
})

const router = useRouter()

// ⭐ Cart logic
const { addToCart, updateQuantity, cartState } = useCart()

function getQty(id) {
  const item = cartState.items.find(i => i.id === id)
  return item ? item.quantity : 0
}

function add(e) {
  e.stopPropagation()
  addToCart(props.food.id)
}

function inc(e) {
  e.stopPropagation()
  updateQuantity(props.food.id, getQty(props.food.id) + 1)
}

function dec(e) {
  e.stopPropagation()
  updateQuantity(props.food.id, getQty(props.food.id) - 1)
}

// ⭐ Existing rating logic
const fullStars = computed(() => Math.floor(props.food.rating || 0))
const hasHalf = computed(() => {
  const r = Number(props.food.rating || 0)
  return r - Math.floor(r) >= 0.5
})

// ⭐ Details navigation
function goDetails() {
  router.push({ name: 'FoodDetails', params: { id: props.food.id } })
}
</script>

<template>
  <!-- ✅ Make card clickable -->
  <article
    @click="goDetails"
    class="group bg-slate-900/50 backdrop-blur rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl animate-fade-in cursor-pointer"
  >
    <div class="relative">
      <img
        :src="food.image"
        :alt="food.title"
        class="h-44 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
      <div class="absolute top-3 left-3">
        <span
          class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-white/10"
          :class="food.veg ? 'bg-emerald-400/15 text-emerald-200' : 'bg-rose-400/15 text-rose-200'"
        >
          {{ food.veg ? 'Veg' : 'Non-Veg' }}
        </span>
      </div>
    </div>

    <div class="p-4">
      <div class="flex items-start justify-between gap-3">
        <div>
          <h3 class="text-base md:text-lg font-extrabold text-white leading-snug">
            {{ food.title }}
          </h3>
          <p class="text-sm text-slate-300 mt-1 h-10 overflow-hidden">
            {{ food.description }}
          </p>
        </div>
      </div>

      <div class="mt-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="flex items-center text-amber-300">
            <svg
              v-for="n in 5"
              :key="n"
              class="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                :fill="
                  n <= fullStars
                    ? 'currentColor'
                    : n === fullStars + 1 && hasHalf
                      ? 'currentColor'
                      : 'transparent'
                "
                :stroke="
                  n <= fullStars || (n === fullStars + 1 && hasHalf)
                    ? 'currentColor'
                    : 'rgba(251, 191, 36, 0.25)'
                "
                stroke-width="1.2"
              />
            </svg>
          </div>
          <span class="text-xs text-slate-300 font-semibold">
            {{ food.rating.toFixed(1) }}
          </span>
        </div>

        <div class="text-lg font-extrabold text-amber-200">
          {{ formatPrice(food.price) }}
        </div>
      </div>

      <!-- ✅ REPLACED BUTTON -->
      <div class="mt-4">
        <!-- + Add button -->
        <div v-if="getQty(food.id) === 0">
          <button
            @click="add"
            class="w-full inline-flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 ring-1 ring-white/15 text-white font-bold px-4 py-2.5 transition duration-300"
          >
            + Add
          </button>
        </div>

        <!-- Quantity controls -->
        <div
          v-else
          class="flex items-center justify-between rounded-xl bg-white/10 ring-1 ring-white/15 overflow-hidden"
        >
          <button @click="dec" class="px-4 py-2 text-white">-</button>
          <span class="text-white font-bold">
            {{ getQty(food.id) }}
          </span>
          <button @click="inc" class="px-4 py-2 text-white">+</button>
        </div>
      </div>
    </div>
  </article>
</template>