<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useCart from '../composables/useCart'
import { foodsById } from '../data/foods'
import { formatPrice } from '../utils/format'

const route = useRoute()
const router = useRouter()
const { addToCart } = useCart()

const foodId = computed(() => route.params.id)
const food = computed(() => foodsById[foodId.value])

const quantity = ref(1)

function dec() {
  quantity.value = Math.max(1, quantity.value - 1)
}

function inc() {
  quantity.value = quantity.value + 1
}

function addCurrentToCart() {
  if (!food.value) return
  addToCart(food.value.id, quantity.value)
  router.push('/cart')
}
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-10 md:py-14">
    <div v-if="food" class="grid gap-8 lg:grid-cols-2 items-start">
      <div class="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-slate-900/30">
        <div class="relative">
          <img :src="food.image" :alt="food.title" class="w-full h-[380px] object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          <div class="absolute top-4 left-4">
            <span
              class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-white/10"
              :class="food.veg ? 'bg-emerald-400/15 text-emerald-200' : 'bg-rose-400/15 text-rose-200'"
            >
              {{ food.veg ? 'Veg' : 'Non-Veg' }}
            </span>
          </div>
        </div>
      </div>

      <div class="animate-fade-in">
        <div class="flex items-center justify-between gap-3 flex-wrap">
          <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {{ food.title }}
          </h1>
          <div class="text-amber-200 font-extrabold text-2xl">
            {{ formatPrice(food.price) }}
          </div>
        </div>

        <div class="mt-3 flex items-center gap-2">
          <div class="flex items-center text-amber-300">
            <svg
              v-for="n in 5"
              :key="n"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                :fill="n <= Math.floor(food.rating) ? 'currentColor' : 'transparent'"
                stroke="rgba(251, 191, 36, 0.3)"
                stroke-width="1.2"
              />
            </svg>
          </div>
          <span class="text-slate-300 font-semibold">{{ food.rating.toFixed(1) }}</span>
        </div>

        <p class="mt-5 text-slate-300 leading-relaxed">
          {{ food.description }}
        </p>

        <div class="mt-7 rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
          <div class="flex items-center justify-between gap-5">
            <div>
              <div class="text-white font-extrabold">Quantity</div>
              <div class="text-slate-300 text-sm mt-1">Adjust before adding to cart.</div>
            </div>

            <div class="flex items-center rounded-xl bg-slate-950/40 ring-1 ring-white/10 overflow-hidden">
              <button
                type="button"
                class="px-4 py-3 text-white hover:bg-white/5 transition duration-300"
                @click="dec"
              >
                -
              </button>
              <div class="px-5 py-2">
                <div class="text-white font-extrabold text-lg text-center">{{ quantity }}</div>
              </div>
              <button
                type="button"
                class="px-4 py-3 text-white hover:bg-white/5 transition duration-300"
                @click="inc"
              >
                +
              </button>
            </div>
          </div>

          <div class="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              type="button"
              class="flex-1 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-emerald-400/20 ring-1 ring-white/15 px-5 py-3 font-bold text-white transition duration-300 ease-in-out transform hover:scale-105"
              @click="addCurrentToCart"
            >
              Add to Cart
            </button>
            <button
              type="button"
              class="rounded-xl bg-white/5 ring-1 ring-white/10 px-5 py-3 font-bold text-white hover:bg-white/10 transition duration-300"
              @click="router.back()"
            >
              Back
            </button>
          </div>
        </div>

        <div class="mt-6 text-sm text-slate-400">
          Note: Checkout is UI-only; your cart persists in `localStorage`.
        </div>
      </div>
    </div>

    <div v-else class="animate-fade-in text-center py-20">
      <h1 class="text-3xl font-extrabold text-white">Food not found</h1>
      <p class="mt-3 text-slate-300">Please open the menu and try again.</p>
      <button
        type="button"
        class="mt-7 rounded-xl bg-white/5 ring-1 ring-white/10 px-6 py-3 font-bold text-white hover:bg-white/10 transition duration-300"
        @click="router.push('/menu')"
      >
        Go to Menu
      </button>
    </div>
  </section>
</template>

