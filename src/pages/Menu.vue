<script setup>
import { computed, ref } from 'vue'
import FoodCard from '../components/FoodCard.vue'
import { foods } from '../data/foods'
import { onMounted, onUnmounted } from 'vue'

const filter = ref('all') // 'all' | 'veg' | 'nonveg'
const sortOption = ref('')
const searchQuery = ref('')

// ✅ Combined filter + search
const filteredFoods = computed(() => {
  let result = foods

  // Veg / Non-Veg filter
  if (filter.value === 'veg') {
    result = result.filter((f) => f.veg)
  } else if (filter.value === 'nonveg') {
    result = result.filter((f) => !f.veg)
  }

  // 🔍 Search filter
  if (searchQuery.value) {
    result = result.filter((f) =>
      f.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  return result
})
const showScrollTop = ref(false)

function handleScroll() {
  showScrollTop.value = window.scrollY > 200
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// ✅ Sorting
const sortedFoods = computed(() => {
  let result = [...filteredFoods.value]

  if (sortOption.value === 'priceLow') {
    result.sort((a, b) => a.price - b.price)
  } else if (sortOption.value === 'priceHigh') {
    result.sort((a, b) => b.price - a.price)
  } else if (sortOption.value === 'rating') {
    result.sort((a, b) => b.rating - a.rating)
  }

  return result
})
</script>

<template>
  <section class="max-w-7xl mx-auto px-4 py-10 md:py-14">
    
    <!-- HEADER -->
    <div class="flex items-end justify-between gap-4 flex-wrap">
      <div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Menu
        </h1>
        <p class="mt-2 text-slate-300">
          Browse premium picks and add them to your cart.
        </p>
      </div>

      <!-- FILTER BUTTONS -->
      <div class="flex flex-wrap gap-3">
        <button
          class="rounded-xl px-4 py-2 font-bold ring-1 ring-white/10 transition duration-300 hover:bg-white/5"
          :class="filter === 'all' ? 'bg-white/10 text-white' : 'text-slate-200'"
          @click="filter = 'all'"
        >
          All
        </button>
        <button
          class="rounded-xl px-4 py-2 font-bold ring-1 ring-white/10 transition duration-300 hover:bg-white/5"
          :class="filter === 'veg' ? 'bg-white/10 text-white' : 'text-slate-200'"
          @click="filter = 'veg'"
        >
          Veg
        </button>
        <button
          class="rounded-xl px-4 py-2 font-bold ring-1 ring-white/10 transition duration-300 hover:bg-white/5"
          :class="filter === 'nonveg' ? 'bg-white/10 text-white' : 'text-slate-200'"
          @click="filter = 'nonveg'"
        >
          Non-Veg
        </button>
      </div>
    </div>

    <!-- 🔍 SEARCH + SORT -->
    <div class="mt-4 flex justify-between items-center flex-wrap gap-4">
      
      <!-- SEARCH -->
      <div class="relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search food..."
        class="px-4 py-2 rounded-xl bg-slate-900 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 w-full sm:w-64"
      />
       <button
    v-if="searchQuery"
    @click="searchQuery = ''"
    class="absolute right-2 top-1/2 -translate-y-1/2 text-white text-sm"
  >
    ✕
  </button>
</div>

      <!-- SORT -->
      <select
        v-model="sortOption"
        class="px-4 py-2 rounded-xl bg-slate-900 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
      >
        <option value="">Sort By</option>
        <option value="priceLow">Price: Low to High</option>
        <option value="priceHigh">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>

    </div>

    <p class="text-slate-400 mt-4">
  Showing {{ sortedFoods.length }} items
</p>

    <!-- FOOD GRID -->
    <div class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <FoodCard v-for="food in sortedFoods" :key="food.id" :food="food" />
    </div>

    <!-- NO RESULTS -->
    <p v-if="sortedFoods.length === 0" class="text-center text-slate-400 mt-10">
      No items found.
    </p>

<button
  v-if="showScrollTop"
  @click="scrollToTop"
  class="fixed bottom-5 right-5 bg-amber-400 text-black px-3 py-2 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
>
  ↑
</button>
  </section>
</template>