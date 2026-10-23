<script setup>
import { ref, computed } from 'vue'

const categories = ['All', 'News', 'Events', 'Announcements']
const selected = ref('All')

// SAMPLE lang. Palitan ng tunay na datos mula sa kolehiyo.
const items = [
  { id: 1, category: 'Events', title: 'Org Fair', text: 'Meet the Computer Science Society, ITSO, MIDAS, and LISSO.' },
  { id: 2, category: 'Events', title: 'Hackathon', text: 'A weekend build sprint open to every program.' },
  { id: 3, category: 'Announcements', title: 'Open Lab Day', text: 'Visit the labs and try a class project.' },
  { id: 4, category: 'News', title: 'College news', text: 'Replace this with a real news item.' },
]

const filtered = computed(() =>
  selected.value === 'All' ? items : items.filter((i) => i.category === selected.value),
)
</script>

<template>
  <header class="banner">
    <p class="kicker">Stay Updated</p>
    <h1>News, Events and Announcements</h1>
  </header>

  <section class="wrap">
    <div class="tabs">
      <button v-for="c in categories" :key="c" :class="{ on: selected === c }" @click="selected = c">
        {{ c }}
      </button>
    </div>

    <div class="grid">
      <article v-for="i in filtered" :key="i.id" class="card">
        <span class="tag">{{ i.category }}</span>
        <h3>{{ i.title }}</h3>
        <p>{{ i.text }}</p>
      </article>
    </div>
    <p class="demo">Sample content for demonstration.</p>
  </section>
</template>

<style scoped>
.banner { padding: 4.5rem 2rem; text-align: center; background: #173d3b; }
.kicker { margin: 0 0 0.8rem; color: #cfd8d6; }
h1 { margin: 0; font: 700 clamp(1.8rem, 4.5vw, 3rem) 'Roboto Slab', Georgia, serif; color: #fdaa26; }
.wrap { max-width: 1100px; margin: 0 auto; padding: 3rem 1.5rem 5rem; }
.tabs { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2rem; }
.tabs button { padding: 0.6rem 1.3rem; border: 1px solid #173d3b; border-radius: 30px; background: #fff; color: #173d3b; cursor: pointer; }
.tabs button.on { background: #173d3b; color: #fff; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
.card { padding: 1.6rem; border: 1px solid #e6e6e6; border-radius: 6px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); }
.tag { font-size: 0.8rem; font-weight: 700; color: #fdaa26; text-transform: uppercase; }
h3 { margin: 0.5rem 0; font: 400 1.4rem 'Roboto Slab', Georgia, serif; color: #173d3b; }
p { margin: 0; line-height: 1.8; color: #666; }
.demo { margin-top: 2rem; font-size: 0.85rem; font-style: italic; color: #999; }
</style>
