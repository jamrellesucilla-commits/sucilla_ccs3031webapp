<script setup>
import { ref, computed } from 'vue'

// Palitan o dagdagan ang mga event dito. Format ng petsa: 'YYYY-MM-DD'
const events = [
  { date: '2026-10-28', title: 'Programming Contest', time: '9:00 AM' },
  { date: '2026-10-30', title: 'CCS Cosplay Day', time: '1:00 PM' },
  { date: '2026-11-05', title: 'Research Colloquium', time: '10:00 AM' },
  { date: '2026-11-12', title: 'Career Orientation', time: '2:00 PM' },
  { date: '2026-11-20', title: 'CCS Foundation Day', time: '8:00 AM' },
]

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December']
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const DAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const VIEWS = [
  { id: 'day', label: 'Day', icon: '☰' },
  { id: 'week', label: 'Week', icon: '☷' },
  { id: 'month', label: 'Month', icon: '▦' },
  { id: 'list', label: 'List', icon: '≣' },
]

const view = ref('month')
const cursor = ref(new Date())
const today = new Date()

const pad = (n) => String(n).padStart(2, '0')
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const addDays = (d, n) => {
  const x = new Date(d)
  x.setDate(x.getDate() + n)
  return x
}
const startOfWeek = (d) => addDays(d, -d.getDay())
const eventsOn = (d) => events.filter((e) => e.date === iso(d))
const cell = (d, month) => ({
  date: d,
  key: iso(d),
  inMonth: d.getMonth() === month,
  isToday: iso(d) === iso(today),
  events: eventsOn(d),
})

const title = computed(() => {
  const c = cursor.value
  if (view.value === 'day')
    return `${DAYS_LONG[c.getDay()]}, ${MONTHS[c.getMonth()]} ${c.getDate()}, ${c.getFullYear()}`
  if (view.value === 'week') {
    const s = startOfWeek(c)
    const e = addDays(s, 6)
    return `${MONTHS[s.getMonth()].slice(0, 3)} ${s.getDate()} – ${MONTHS[e.getMonth()].slice(0, 3)} ${e.getDate()}, ${e.getFullYear()}`
  }
  return `${MONTHS[c.getMonth()]} ${c.getFullYear()}`
})

const monthCells = computed(() => {
  const c = cursor.value
  const first = new Date(c.getFullYear(), c.getMonth(), 1)
  const last = new Date(c.getFullYear(), c.getMonth() + 1, 0)
  const total = Math.ceil((first.getDay() + last.getDate()) / 7) * 7
  const start = startOfWeek(first)
  return Array.from({ length: total }, (_, i) => cell(addDays(start, i), c.getMonth()))
})

const weekCells = computed(() => {
  const s = startOfWeek(cursor.value)
  return Array.from({ length: 7 }, (_, i) => cell(addDays(s, i), cursor.value.getMonth()))
})

const dayEvents = computed(() => eventsOn(cursor.value))

const listEvents = computed(() =>
  events
    .filter((e) => {
      const d = new Date(e.date + 'T00:00')
      return d.getMonth() === cursor.value.getMonth() && d.getFullYear() === cursor.value.getFullYear()
    })
    .sort((a, b) => a.date.localeCompare(b.date))
)

const step = (dir) => {
  const c = new Date(cursor.value)
  if (view.value === 'month' || view.value === 'list') {
    c.setDate(1)
    c.setMonth(c.getMonth() + dir)
  } else if (view.value === 'week') {
    c.setDate(c.getDate() + 7 * dir)
  } else {
    c.setDate(c.getDate() + dir)
  }
  cursor.value = c
}
const goToday = () => (cursor.value = new Date())

const prettyDate = (s) => {
  const d = new Date(s + 'T00:00')
  return `${DAYS[d.getDay()]}, ${MONTHS[d.getMonth()]} ${d.getDate()}`
}
</script>

<template>
  <section id="events" class="events">
    <div class="banner">
      <p class="kicker">Be Updated With Every college Events</p>
      <h2>Upcoming College Events</h2>
    </div>

    <div class="wrap">
      <h3 class="heading">Event Calendar</h3>

      <div class="toolbar">
        <div class="nav">
          <button aria-label="Previous" @click="step(-1)">‹</button>
          <button aria-label="Next" @click="step(1)">›</button>
          <button class="today" @click="goToday">Today</button>
        </div>

        <h4 class="title">{{ title }}</h4>

        <div class="views">
          <button
            v-for="v in VIEWS"
            :key="v.id"
            :class="{ on: view === v.id }"
            @click="view = v.id"
          >
            <span aria-hidden="true">{{ v.icon }}</span> {{ v.label }}
          </button>
        </div>
      </div>

      <!-- MONTH -->
      <div v-if="view === 'month'" class="scroll">
        <div class="cal">
          <div v-for="d in DAYS" :key="d" class="dow">{{ d }}</div>
          <div
            v-for="c in monthCells"
            :key="c.key"
            class="day"
            :class="{ out: !c.inMonth, today: c.isToday }"
          >
            <span class="num">{{ c.date.getDate() }}</span>
            <span v-for="e in c.events" :key="e.title" class="chip" :title="e.time">{{ e.title }}</span>
          </div>
        </div>
      </div>

      <!-- WEEK -->
      <div v-else-if="view === 'week'" class="scroll">
        <div class="cal">
          <div v-for="c in weekCells" :key="'h' + c.key" class="dow">
            {{ DAYS[c.date.getDay()] }} {{ c.date.getDate() }}
          </div>
          <div v-for="c in weekCells" :key="c.key" class="day tall" :class="{ today: c.isToday }">
            <span v-for="e in c.events" :key="e.title" class="chip" :title="e.time">{{ e.title }}</span>
          </div>
        </div>
      </div>

      <!-- DAY -->
      <div v-else-if="view === 'day'" class="panel">
        <p v-if="!dayEvents.length" class="empty">No events on this day.</p>
        <ul v-else class="list">
          <li v-for="e in dayEvents" :key="e.title">
            <strong>{{ e.title }}</strong>
            <span>{{ e.time }}</span>
          </li>
        </ul>
      </div>

      <!-- LIST -->
      <div v-else class="panel">
        <p v-if="!listEvents.length" class="empty">No events this month.</p>
        <ul v-else class="list">
          <li v-for="e in listEvents" :key="e.date + e.title">
            <strong>{{ e.title }}</strong>
            <span>{{ prettyDate(e.date) }} · {{ e.time }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.events { background: #fff; }

/* banner */
.banner {
  padding: 8rem 2rem 4.5rem;
  text-align: center;
  background: #173d3b;
}
.kicker {
  margin: 0 0 0.9rem;
  font-size: 1rem;
  color: #cfd8d6;
}
.banner h2 {
  margin: 0;
  font: 700 clamp(2rem, 5vw, 3.6rem) / 1.1 'Roboto Slab', Georgia, serif;
  color: #fdaa26;
}

.wrap {
  max-width: 1300px;
  margin: 0 auto;
  padding: 4rem 2rem 5rem;
}
.heading {
  margin: 0 0 1.5rem;
  font: 700 1.9rem/1.2 'Roboto', sans-serif;
  color: #fdaa26;
}

/* toolbar */
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;
}
.nav, .views { display: flex; gap: 0.5rem; }
.toolbar button {
  padding: 0.85rem 1.1rem;
  border: 0;
  border-radius: 4px;
  background: #f1f3f3;
  color: #4a4a4a;
  font: 500 1rem 'Roboto', sans-serif;
  cursor: pointer;
}
.toolbar button:hover { background: #e4e8e7; }
.toolbar .today { color: #8a8a8a; }
.views button.on {
  background: #fdaa26;
  color: #0f2a30;
}
.title {
  margin: 0;
  font: 500 1.9rem 'Roboto', sans-serif;
  color: #111;
}

/* calendar grid */
.scroll { overflow-x: auto; }
.cal {
  min-width: 640px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid #c9d0cf;
  border-left: 1px solid #c9d0cf;
}
.dow, .day {
  border-right: 1px solid #c9d0cf;
  border-bottom: 1px solid #c9d0cf;
}
.dow {
  padding: 1.4rem 0.5rem;
  text-align: center;
  font-weight: 700;
  font-size: 1.15rem;
  color: #3a3a3a;
}
.day {
  min-height: 110px;
  padding: 0.5rem 0.6rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 1rem;
  color: #222;
}
.day.tall { min-height: 260px; }
.day.out { color: #b5bcbc; }
.day.today { background: #fff6e0; }
.num { text-align: center; }
.chip {
  padding: 3px 6px;
  border-radius: 3px;
  background: #fdaa26;
  color: #0f2a30;
  font-size: 0.8rem;
  line-height: 1.25;
}

/* day at list view */
.panel {
  padding: 1rem 0;
  border-top: 1px solid #c9d0cf;
}
.empty {
  margin: 2rem 0;
  text-align: center;
  color: #8a8a8a;
}
.list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list li {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid #e3e7e6;
  border-left: 4px solid #fdaa26;
  padding-left: 1rem;
}
.list strong { color: #173d3b; }
.list span { color: #7a7a7a; }

@media (max-width: 700px) {
  .banner { padding: 7rem 1.25rem 3rem; }
  .wrap { padding: 2.5rem 1rem 3rem; }
  .title { order: -1; width: 100%; font-size: 1.5rem; }
  .toolbar button { padding: 0.65rem 0.8rem; font-size: 0.9rem; }
}
</style>