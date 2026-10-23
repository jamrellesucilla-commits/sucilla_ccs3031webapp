<script setup>
import Story from '../components/Story.vue'
</script>

<template>
  <header class="banner">
    <p class="kicker">Who We Are</p>
    <h1>About the College</h1>
  </header>

  <Story />

  <section class="wrap">
    <div class="box">
      <h2>Vision</h2>
      <!-- Ilagay ang OPISYAL na bisyon ng CCS (huwag gawa-gawa) -->
      <p>Official vision statement here.</p>
    </div>
    <div class="box">
      <h2>Mission</h2>
      <p>Official mission statement here.</p>
    </div>
    <div class="box">
      <h2>Objectives</h2>
      <p>Official objectives here.</p>
    </div>
  </section>
</template>

<style scoped>
.banner { padding: 4.5rem 2rem; text-align: center; background: #173d3b; }
.kicker { margin: 0 0 0.8rem; color: #cfd8d6; }
h1 { margin: 0; font: 700 clamp(2rem, 5vw, 3.4rem) 'Roboto Slab', Georgia, serif; color: #fdaa26; }
.wrap { max-width: 1100px; margin: 0 auto; padding: 4rem 1.5rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.box { padding: 1.8rem; border: 1px solid #e6e6e6; border-top: 5px solid #fdaa26; border-radius: 6px; }
h2 { margin: 0 0 0.8rem; font: 400 1.5rem 'Roboto Slab', Georgia, serif; color: #173d3b; }
p { margin: 0; line-height: 1.9; color: #666; }
@media (max-width: 800px) { .wrap { grid-template-columns: 1fr; } }
</style>
