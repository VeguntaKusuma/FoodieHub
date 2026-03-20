<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group bg-slate-900/40 backdrop-blur rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-default"
  >
    <div class="relative">
      <img
        :src="category.image"
        :alt="category.name"
        class="h-32 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        loading="lazy"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
    </div>
    <div class="p-4">
      <h3 class="text-lg font-extrabold text-white">{{ category.name }}</h3>
      <p class="text-sm text-slate-300 mt-1">Explore fresh picks</p>
    </div>
  </article>
</template>

