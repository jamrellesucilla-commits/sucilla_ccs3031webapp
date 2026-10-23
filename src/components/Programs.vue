<script setup>
import { programs } from '../data/programs'
</script>

<template>
  <section id="programs" class="programs">
    <RouterLink v-for="p in programs" :key="p.slug" :to="`/programs/${p.slug}`" class="card">
      <h3>{{ p.title }}</h3>
      <p>{{ p.summary }}</p>
    </RouterLink>
  </section>
</template>

<style scoped>
.programs {
  max-width: 1500px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 3.2rem; padding: 3rem 4rem 6rem; background: #fff;
}
.card {
  display: block; min-height: 30rem; padding: 2.8rem 2rem; text-align: center;
  border: 1px solid #e6e6e6; border-radius: 6px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.25s, transform 0.25s;
}
.card:hover { box-shadow: 0 14px 32px rgba(0, 0, 0, 0.18); transform: translateY(-2px); }
h3 { margin: 0 0 2.4rem; font: 400 1.9rem/1.35 'Roboto Slab', Georgia, serif; color: #173d3b; }
p { margin: 0; font-size: 1.1rem; line-height: 2.2; color: #8a8a8a; }
@media (max-width: 1000px) { .programs { grid-template-columns: repeat(2, 1fr); padding: 2rem 1.5rem 4rem; } }
@media (max-width: 560px) { .programs { grid-template-columns: 1fr; } }
</style>
