<script setup>
import { ref } from 'vue'
import { programs } from '../data/programs'

// kinukuha ang unang larawang may "logo" sa pangalan mula sa src/assets
const logos = import.meta.glob('../assets/*logo*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' })
const logo = Object.values(logos)[0]

const open = ref(false)
const showFaculty = import.meta.env.DEV // nakatago sa deployed site
</script>

<template>
  <header class="header">
    <RouterLink to="/"><img :src="logo" alt="CCS logo" class="logo" /></RouterLink>
    <button class="burger" aria-label="Toggle menu" @click="open = !open">&#9776;</button>

    <nav :class="{ open }" @click="open = false">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About Us</RouterLink>
      <div class="dd">
        <span class="label" tabindex="0">Academic Programs &#9662;</span>
        <div class="menu">
          <RouterLink v-for="p in programs" :key="p.slug" :to="`/programs/${p.slug}`">
            {{ p.short }}
          </RouterLink>
        </div>
      </div>
      <RouterLink v-if="showFaculty" to="/faculty">Faculty and Staff</RouterLink>
      <RouterLink to="/news">News and Events</RouterLink>
      <RouterLink to="/contact">Contact Us</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: sticky; top: 0; z-index: 50;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.5rem 1.2rem; background: #0f2227;
}
.logo { height: 52px; }
nav { display: flex; align-items: center; gap: 2rem; }
nav a, .label { color: #fff; font-weight: 500; font-size: 1.1rem; cursor: pointer; }
nav a:hover, .label:hover, .router-link-exact-active { color: #fdaa26; }
.dd { position: relative; }
.menu {
  display: none; position: absolute; top: 100%; left: 0; min-width: 150px;
  flex-direction: column; background: #0f2227; padding: 0.5rem 0;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}
.menu a { padding: 0.5rem 1.2rem; }
.dd:hover .menu, .dd:focus-within .menu { display: flex; }
.burger { display: none; background: none; border: 0; color: #fff; font-size: 1.8rem; cursor: pointer; }
@media (max-width: 900px) {
  .burger { display: block; }
  nav {
    display: none; position: absolute; top: 100%; left: 0; right: 0;
    flex-direction: column; align-items: flex-start; gap: 0.2rem;
    padding: 1rem 1.5rem; background: #0f2227;
  }
  nav.open { display: flex; }
  .menu { display: flex; position: static; box-shadow: none; padding-left: 1rem; }
}
</style>
