<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import useCart from '../composables/useCart'
import { formatPrice } from '../utils/format'

const router = useRouter()
const { cartLines, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart()

const isEmpty = computed(() => cartLines.value.length === 0)

function dec(line) {
  updateQuantity(line.id, line.quantity - 1)
}

function inc(line) {
  updateQuantity(line.id, line.quantity + 1)
}
function handleCheckoutDone() {
  clearCart()
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-10 md:py-14">
    <div class="flex items-end justify-between gap-4 flex-wrap">
      <div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Your Cart</h1>
        <p class="mt-2 text-slate-300">Premium ordering flow with instant cart persistence.</p>
      </div>
      <div class="flex gap-3">
        <button
          v-if="!isEmpty"
          type="button"
          class="rounded-xl px-4 py-2 font-bold ring-1 ring-white/10 bg-white/5 text-slate-200 hover:bg-white/10 transition duration-300"
          @click="clearCart"
        >
          Clear
        </button>
        <button
          type="button"
          class="rounded-xl px-4 py-2 font-bold ring-1 ring-white/10 bg-transparent text-slate-200 hover:bg-white/5 transition duration-300"
          @click="router.push('/menu')"
        >
          Add More
        </button>
      </div>
    </div>

    <div v-if="isEmpty" class="py-20 text-center">
      <div class="mx-auto max-w-xl">
        <div class="text-slate-300 text-lg font-semibold">Your cart is empty.</div>
        <p class="mt-3 text-slate-400">Pick a dish from the menu and we’ll keep it here.</p>
        <button
          type="button"
          class="mt-7 rounded-xl bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-emerald-400/20 ring-1 ring-white/15 px-6 py-3 font-bold text-white hover:bg-white/10 transition duration-300 transform hover:scale-105"
          @click="router.push('/menu')"
        >
          Explore Menu
        </button>
      </div>
    </div>

    <div v-else class="mt-8 grid gap-6 lg:grid-cols-3 items-start">
      <div class="lg:col-span-2 space-y-4">
        <div
          v-for="line in cartLines"
          :key="line.id"
          class="rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-lg overflow-hidden"
        >
          <div class="flex gap-4 p-4 sm:p-5">
            <img :src="line.food.image" :alt="line.food.title" class="h-20 w-20 rounded-xl object-cover" />

            <div class="flex-1">
              <div class="flex items-start justify-between gap-3">
                <div>
                  <h2 class="text-white font-extrabold text-lg">
                    {{ line.food.title }}
                  </h2>
                  <div class="text-slate-300 text-sm mt-1">
                    {{ formatPrice(line.food.price) }} each
                  </div>
                </div>

                <div class="text-amber-200 font-extrabold">
                  {{ formatPrice(line.food.price * line.quantity) }}
                </div>
              </div>

              <div class="mt-4 flex flex-wrap items-center gap-3">
                <div class="flex items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10 overflow-hidden">
                  <button class="px-3 py-2 text-white hover:bg-white/5" @click="dec(line)">-</button>
                  <div class="px-4 py-2 text-white font-bold">{{ line.quantity }}</div>
                  <button class="px-3 py-2 text-white hover:bg-white/5" @click="inc(line)">+</button>
                </div>

                <button
                  class="rounded-xl px-3 py-2 font-bold ring-1 ring-white/10 text-slate-200 hover:bg-white/5"
                  @click="removeFromCart(line.id)"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside class="lg:col-span-1">
        <div class="sticky top-24 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 shadow-lg">
          <h3 class="text-white font-extrabold text-xl">Order Summary</h3>

          <div class="mt-4 space-y-3 text-slate-300">
            <div class="flex justify-between">
              <span>Items total</span>
              <span>{{ cartLines.reduce((sum, l) => sum + l.quantity, 0) }}</span>
            </div>

            <div class="flex justify-between font-bold text-white">
              <span>Total</span>
              <span>{{ formatPrice(cartTotal) }}</span>
            </div>
          </div>

          <!-- ✅ UPDATED BUTTON -->
          <button
            type="button"
            class="mt-5 w-full rounded-xl bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-emerald-400/20 ring-1 ring-white/15 px-5 py-3 font-bold text-white hover:bg-white/10 transition duration-300 transform hover:scale-105"
            data-bs-toggle="modal"
            data-bs-target="#checkoutModal"
          >
            Checkout
          </button>

          <p class="mt-3 text-sm text-slate-400">
            Checkout is UI-only. Your cart is stored locally.
          </p>
        </div>
      </aside>
    </div>
  </section>

  <!-- ✅ BOOTSTRAP MODAL -->
  <div class="modal fade" id="checkoutModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content bg-dark text-white">

        <div class="modal-header">
          <h5 class="modal-title">Order Info</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body">
          Your order has been placed successfully!
        </div>

        <div class="modal-footer">
          <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button
  type="button"
  class="btn btn-primary"
  data-bs-dismiss="modal"
  @click="handleCheckoutDone"
>
  OK
</button>
        </div>

      </div>
    </div>
  </div>
</template>