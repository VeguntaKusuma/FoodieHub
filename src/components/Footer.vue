<template>
  <footer class="border-t border-white/10 bg-slate-950/60">
    <div class="max-w-7xl mx-auto px-4 py-10">
      <div class="grid gap-8 md:grid-cols-3">
        <div>
          <div class="flex items-center gap-2 font-extrabold text-white text-lg">
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
                />
              </svg>
            </span>
            FoodieHub
          </div>
          <p class="text-slate-300 mt-3 leading-relaxed">
            Premium food ordering experience with fast delivery vibes.
          </p>
        </div>

        <div class="md:pl-10">
          <h4 class="text-white font-extrabold mb-3">Explore</h4>
          <ul class="text-slate-300 space-y-2">
            <li>
              <RouterLink to="/" class="hover:text-white transition-colors duration-300">Home</RouterLink>
            </li>
            <li>
              <RouterLink to="/menu" class="hover:text-white transition-colors duration-300">Menu</RouterLink>
            </li>
            <li>
              <RouterLink to="/cart" class="hover:text-white transition-colors duration-300">Cart</RouterLink>
            </li>
          </ul>
        </div>

        <div class="md:pl-6">
          <h4 class="text-white font-extrabold mb-3">Get Updates</h4>
          <p class="text-slate-300">
            New drops, deals, and chef specials. Coming soon.
          </p>
          
        </div>
      </div>

      <div class="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p class="text-slate-400 text-sm">© {{ new Date().getFullYear() }} FoodieHub. All rights reserved.</p>
        
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

