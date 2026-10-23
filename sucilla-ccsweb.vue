<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import Header from './Header.vue'
import Hero from './Hero.vue'
import Orgs from './Orgs.vue'
import Story from './Story.vue'
import Dean from './Dean.vue'
import Faculty from './Faculty.vue'
import Events from './Events.vue'
import Contact from './Contact.vue'

// 'home' = pangunahing page; ang iba ay hiwalay na page
const view = ref('home')
const pages = ['faculty', 'events', 'contact']

const sync = async () => {
  const id = location.hash.slice(1)
  view.value = pages.includes(id) ? id : 'home'

  await nextTick()
  const el = id ? document.getElementById(id) : null
  if (el) el.scrollIntoView()
  else window.scrollTo(0, 0)
}

const showTop = ref(false)
const onScroll = () => (showTop.value = window.scrollY > 500)
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('hashchange', sync)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('hashchange', sync)
})
</script>

<template>
  <Header :key="view" />

  <main>
    <template v-if="view === 'home'">
      <Hero />
      <Orgs />
      <Story />
      <Dean />
    </template>

    <div v-else class="subpage">
      <Faculty v-if="view === 'faculty'" />
      <Events v-else-if="view === 'events'" />
      <Contact v-else />
    </div>
  </main>

  <button v-show="showTop" class="to-top" aria-label="Back to top" @click="toTop">⌃</button>
</template>

<style>
.subpage {
  padding-top: 3rem;
  background: #173d3b;
}

.to-top {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 30;
  width: 56px;
  height: 56px;
  border: 0;
  border-radius: 50%;
  background: #fff;
  color: #0f2a30;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
}
</style>