<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { programs } from '../data/programs'

const route = useRoute()
const program = computed(() => programs.find((p) => p.slug === route.params.slug))

const sections = computed(() => [
  { title: 'Program Objectives', items: program.value.objectives },
  { title: 'Areas of Study', items: program.value.areas },
  { title: 'Course Highlights', items: program.value.courses },
  { title: 'Career Opportunities', items: program.value.careers },
])
</script>

<template>
  <article v-if="program" :style="{ '--accent': program.accent }">
    <header class="banner">
      <p class="kicker">{{ program.short }}</p>
      <h1>{{ program.name }}</h1>
    </header>

    <div class="body">
      <section class="overview">
        <h2>Overview</h2>
        <p>{{ program.overview }}</p>
      </section>

      <div class="grid">
        <section v-for="s in sections" :key="s.title" class="box">
          <h2>{{ s.title }}</h2>
          <ul>
            <li v-for="item in s.items" :key="item">{{ item }}</li>
          </ul>
        </section>
      </div>

      <section class="overview">
        <h2>Teachers</h2>
        <ul v-if="program.teachers.length">
          <li v-for="t in program.teachers" :key="t">{{ t }}</li>
        </ul>
        <p v-else class="note">Teacher information will be added once verified.</p>
      </section>
    </div>
  </article>

  <section v-else class="body">
    <h2>Program not found</h2>
    <RouterLink to="/">Back to Home</RouterLink>
  </section>
</template>

<style scoped>
.banner { padding: 4.5rem 2rem; text-align: center; color: #fff; background: var(--accent); }
.kicker { margin: 0 0 0.5rem; letter-spacing: 0.2em; opacity: 0.85; }
h1 { margin: 0; font: 700 clamp(1.8rem, 4vw, 3rem) 'Roboto Slab', Georgia, serif; }
.body { max-width: 1100px; margin: 0 auto; padding: 3rem 1.5rem 5rem; }
h2 { margin: 0 0 1rem; font: 400 1.6rem 'Roboto Slab', Georgia, serif; color: var(--accent, #173d3b); }
.overview { margin-bottom: 2.5rem; line-height: 1.9; color: #555; }
.grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-bottom: 2.5rem; }
.box { padding: 1.5rem 1.8rem; border: 1px solid #e6e6e6; border-top: 5px solid var(--accent); border-radius: 6px; }
.box ul { margin: 0; padding-left: 1.2rem; line-height: 2; color: #555; }
.note { color: #888; font-style: italic; }
@media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }
</style>
