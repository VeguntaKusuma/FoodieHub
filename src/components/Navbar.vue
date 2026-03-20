<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import useCart from '../composables/useCart'

const { cartCount } = useCart()
const isScrolled = ref(false)
const mobileOpen = ref(false)

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 8
  }
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
    :class="isScrolled ? 'shadow-lg bg-slate-950/80 backdrop-blur' : 'bg-slate-950/60 backdrop-blur'"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between py-3">
        <RouterLink
          to="/"
          class="flex items-center gap-2 font-extrabold text-lg tracking-tight text-white"
          @click="closeMobile"
        >
          <span
            class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/20 to-rose-400/20 ring-1 ring-white/10"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 21h10c1.1 0 2-.9 2-2v-7l-2-9H7L5 12v7c0 1.1.9 2 2 2Z"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                opacity="0.95"
              />
              <path
                d="M9 10h6"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                opacity="0.95"
              />
              <path
                d="M9.5 18h5"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                opacity="0.95"
              />
            </svg>
          </span>
          FoodieHub
        </RouterLink>

        <nav class="hidden md:flex items-center gap-7 text-sm font-semibold">
          <RouterLink
            to="/"
            class="text-slate-200 hover:text-white transition-colors duration-300"
            active-class="text-white"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/menu"
            class="text-slate-200 hover:text-white transition-colors duration-300"
            active-class="text-white"
          >
            Menu
          </RouterLink>
          <RouterLink
            to="/cart"
            class="relative text-slate-200 hover:text-white transition-colors duration-300"
            active-class="text-white"
          >
            <span class="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 7h14l-2 8H9L7 7Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7 6 3H2"
                  stroke="currentColor"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
                <path
                  d="M18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                  stroke="currentColor"
                  stroke-width="1.6"
                />
              </svg>
              Cart
            </span>
            <span
              v-if="cartCount > 0"
              class="absolute -top-2 -right-3 inline-flex items-center justify-center h-5 min-w-5 rounded-full bg-rose-500 text-white text-xs font-bold ring-2 ring-slate-950"
            >
              {{ cartCount }}
            </span>
          </RouterLink>
        </nav>

        <div class="md:hidden flex items-center gap-3">
          <RouterLink to="/cart" class="relative text-slate-200 hover:text-white transition-colors" @click="closeMobile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 7h14l-2 8H9L7 7Z"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linejoin="round"
              />
              <path
                d="M7 7 6 3H2"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                stroke="currentColor"
                stroke-width="1.6"
              />
              <path
                d="M18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                stroke="currentColor"
                stroke-width="1.6"
              />
            </svg>
            <span
              v-if="cartCount > 0"
              class="absolute -top-2 -right-3 inline-flex items-center justify-center h-5 min-w-5 rounded-full bg-rose-500 text-white text-xs font-bold ring-2 ring-slate-950"
            >
              {{ cartCount }}
            </span>
          </RouterLink>

          <button
            type="button"
            class="inline-flex items-center justify-center rounded-xl p-2 ring-1 ring-white/10 hover:bg-white/5 transition-colors"
            @click="mobileOpen = !mobileOpen"
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              <path d="M4 12h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
              <path d="M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileOpen" class="md:hidden pb-3 animate-fade-in">
        <div class="flex flex-col gap-2 text-sm font-semibold">
          <RouterLink
            to="/"
            class="rounded-xl px-3 py-2 text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
            active-class="bg-white/5 text-white"
            @click="closeMobile"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/menu"
            class="rounded-xl px-3 py-2 text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
            active-class="bg-white/5 text-white"
            @click="closeMobile"
          >
            Menu
          </RouterLink>
          <RouterLink
            to="/cart"
            class="rounded-xl px-3 py-2 text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
            active-class="bg-white/5 text-white"
            @click="closeMobile"
          >
            Cart
            <span v-if="cartCount > 0" class="ml-2 inline-flex items-center rounded-full bg-rose-500 px-2 py-0.5 text-white text-xs font-bold">
              {{ cartCount }}
            </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

