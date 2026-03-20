<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import FoodCard from '../components/FoodCard.vue'
import CategoryCard from '../components/CategoryCard.vue'
import { categories } from '../data/categories'
import { foods } from '../data/foods'

const router = useRouter()

const heroImage =
  'https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=2200&q=80'

const popularFoods = computed(() => foods.slice(0, 8))
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <div class="h-full w-full bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }" />
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/30" />
    </div>

    <div class="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div class="grid items-center gap-10 lg:grid-cols-2">
        <div class="animate-fade-in">
          <div class="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm text-slate-200">
            <span class="h-2 w-2 rounded-full bg-emerald-400" />
            Fast delivery. Premium taste.
          </div>
          <h1 class="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-white">
            Delicious Food Delivered To You
          </h1>
          <p class="mt-5 text-lg md:text-xl text-slate-200/90 leading-relaxed">
            Discover hand-picked favourites, add to cart in seconds, and enjoy restaurant-quality meals at home.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-400/20 via-rose-400/20 to-emerald-400/20 ring-1 ring-white/15 px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white/10"
              @click="router.push('/menu')"
            >
              Explore Menu
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 px-6 py-3 font-bold text-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white/10"
              @click="router.push('/cart')"
            >
              View Cart
            </button>
          </div>
        </div>

        <div class="animate-fade-in">
          <div class="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-6 md:p-8 shadow-2xl">
            <div class="flex items-center justify-between gap-6">
              <div>
                <h2 class="text-white text-2xl font-extrabold">Today’s Picks</h2>
                <p class="mt-2 text-slate-300">Curated for cravings across Pizza, Biryani, Desserts, and Drinks.</p>
              </div>
              <div class="hidden sm:flex flex-col items-end">
                <span class="text-sm text-slate-300">Avg. rating</span>
                <span class="text-3xl font-extrabold text-amber-300">4.6</span>
              </div>
            </div>

            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-4">
                <div class="text-slate-300 text-sm font-semibold">Premium Packing</div>
                <div class="mt-2 text-white font-extrabold">Fresh & Sealed</div>
              </div>
              <div class="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-4">
                <div class="text-slate-300 text-sm font-semibold">Chef Specials</div>
                <div class="mt-2 text-white font-extrabold">Limited Drops</div>
              </div>
              <div class="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-4">
                <div class="text-slate-300 text-sm font-semibold">Easy Checkout</div>
                <div class="mt-2 text-white font-extrabold">One Tap Flow</div>
              </div>
              <div class="rounded-2xl bg-slate-950/40 ring-1 ring-white/10 p-4">
                <div class="text-slate-300 text-sm font-semibold">Smart Cart</div>
                <div class="mt-2 text-white font-extrabold">Auto Saved</div>
              </div>
            </div>

            <div class="mt-6 flex flex-wrap gap-3">
              <span class="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm text-slate-200">
                Rounded cards
              </span>
              <span class="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm text-slate-200">
                Smooth hover
              </span>
              <span class="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 text-sm text-slate-200">
                Mobile friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 py-12 md:py-16">
    <div class="flex items-end justify-between gap-4 flex-wrap">
      <div>
        <h2 class="text-3xl font-extrabold text-white">Categories</h2>
        <p class="mt-2 text-slate-300">Pick your vibe. We’ll deliver the flavour.</p>
      </div>
    </div>

    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <CategoryCard v-for="cat in categories" :key="cat.id" :category="cat" />
    </div>
  </section>

  <section class="max-w-7xl mx-auto px-4 pb-16">
    <div>
      <h2 class="text-3xl font-extrabold text-white">Popular Food</h2>
      <p class="mt-2 text-slate-300">Top picks loved by the community.</p>
    </div>

    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <FoodCard v-for="food in popularFoods" :key="food.id" :food="food" />
    </div>
  </section>
</template>

