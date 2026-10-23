<script setup>
import csLogo from '../assets/cs.png'
import itLogo from '../assets/itso.png'
import dmiaLogo from '../assets/midas.png'
import lisLogo from '../assets/lisso.png'

const programs = [
  {
    title: 'Computer Science',
    logo: csLogo,
    text: 'The Computer Science (CS) Program is designed for students who wants to study computing in depth, focusing in the software, the hardware',
  },
  {
    title: 'Information Technology',
    logo: itLogo,
    text: 'The Information Technology (IT) program is designed to bridge the gap between computer science and management information systems.',
  },
  {
    title: 'Digital Media and Interactive Arts',
    logo: dmiaLogo,
    text: 'The Degree of Bachelor of Science in Digital Media and Interactive Arts is focused on creativity, applied arts and digital media technologies.',
  },
  {
    title: 'Library Information Science',
    logo: lisLogo,
    text: 'The Degree of Bachelor of Library and Information Science (BLIS) is a four-year program that prepares students in the development',
  },
]
</script>

<template>
  <section id="programs" class="orgs">
    <div class="band"></div>

    <div class="grid">
      <article v-for="p in programs" :key="p.title" class="item">
        <div class="logo-wrap">
          <img :src="p.logo" :alt="p.title + ' logo'" />
        </div>
        <div class="card">
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.orgs {
  position: relative;
  padding: 0 2rem 4rem;
  background: #fff;
}

.band {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 190px;
  background: #0f2a30;
}

.grid {
  position: relative;
  z-index: 1;
  max-width: 1300px;
  margin: 0 auto;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.logo-wrap {
  height: 190px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.logo-wrap img {
  max-height: 180px;
  max-width: 80%;
  object-fit: contain;
}

.card {
  margin-top: 20px;
  min-height: 460px;
  padding: 2rem 1.5rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  text-align: center;
}
.card h3 {
  margin: 0 0 2rem;
  font: 400 1.9rem/1.3 'Roboto Slab', Georgia, serif;
  color: #0f3d33;
}
.card p {
  margin: 0;
  font-size: 1.05rem;
  line-height: 2;
  color: #8a9a97;
}

@media (max-width: 1000px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .orgs { padding: 0 1rem 3rem; }
  .band { height: 170px; }
  .grid { grid-template-columns: 1fr; padding-top: 30px; }
  .card { min-height: 0; }
}
</style>