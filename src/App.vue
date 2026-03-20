<script setup>
import { useRoute } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

const route = useRoute()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
    <Navbar />

    <main class="flex-1 pt-20">
      <RouterView :key="route.fullPath" v-slot="{ Component }">
        <div class="fade-in">
          <component :is="Component" />
        </div>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>
