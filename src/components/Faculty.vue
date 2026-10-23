<script setup>
// Kinukuha nito ang lahat ng larawan sa src/assets (.jpg, .jpeg, .png, .webp)
const files = import.meta.glob('../assets/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

// Hanapin ang larawan ayon sa pangalan, kahit anong extension
const photo = (name) => {
  const key = Object.keys(files).find((k) =>
    k.toLowerCase().startsWith(`../assets/${name}.`)
  )
  return key ? files[key] : ''
}

const deanPhoto = photo('ting')

// alt lang ang pangalan (hindi lumalabas sa page)
const toList = (names) => names.map((n) => ({ photo: photo(n), alt: n }))

const coordinators = toList(['pajar', 'mae', 'rose', 'rhea'])

// 4 kada hanay; kusang bumababa ang susunod na apat
const faculty = toList(['leo', 'pedro', 'joy', 'rod', 'don', 'jr', 'leah', 'sapul'])

const staff = toList(['castano', 'latter', 'ador', 'donna'])
</script>

<template>
  <section id="faculty" class="faculty">
    <div class="banner">
      <p class="kicker">Academically Knowledgeable and Here For You</p>
      <h2>Faculty and Staff Members</h2>
    </div>

    <div class="people">
      <div class="intro">
        <p class="small">Teaching With A Smile</p>
        <h3>Meet Our People</h3>
      </div>

      <div class="text">
        <p>
          Lorem ipsum dolor sit amet, conetur adiping elit Lorem ipsum dolor sit amet, cons ectetur
          adipiscing elit Lorem ipsum dolor sit altmet, conse ctetur adipiscing elit aloma lomiur
          off silder tolos. Lorem ipsum dolor sitlor amet, conetur adiping elit Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>

    <div class="dean">
      <h3>Dean</h3>
      <figure class="portrait">
        <img v-if="deanPhoto" :src="deanPhoto" alt="Ma. Christina A. Quijano, MSCS, Dean" />
        <div v-else class="empty"></div>
      </figure>
    </div>

    <!-- Department Head and Coordinators -->
    <div class="group">
      <h3>Department Head and Coordinators</h3>
      <div class="grid">
        <figure v-for="c in coordinators" :key="c.alt" class="card">
          <img v-if="c.photo" :src="c.photo" :alt="c.alt" />
          <div v-else class="empty"></div>
        </figure>
      </div>
    </div>

    <!-- Faculty -->
    <div class="group">
      <h3>Faculty</h3>
      <div class="grid">
        <figure v-for="f in faculty" :key="f.alt" class="card">
          <img v-if="f.photo" :src="f.photo" :alt="f.alt" />
          <div v-else class="empty"></div>
        </figure>
      </div>
    </div>

    <!-- Staff -->
    <div class="group">
      <p class="label">Service and Teaching</p>
      <h3>Staff</h3>
      <div class="grid">
        <figure v-for="s in staff" :key="s.alt" class="card">
          <img v-if="s.photo" :src="s.photo" :alt="s.alt" />
          <div v-else class="empty"></div>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faculty {
  background: #fff;
}

/* madilim na berdeng banner */
.banner {
  padding: 5rem 2rem 4.5rem;
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

/* Meet Our People */
.people {
  max-width: 1300px;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 4rem;
  align-items: center;
}
.intro {
  padding-left: 2.2rem;
  border-left: 4px solid #fdaa26;
}
.small {
  margin: 0 0 0.5rem;
  font-size: 1.05rem;
  color: #6b6b6b;
}
.intro h3 {
  margin: 0;
  font: 300 clamp(2.6rem, 6vw, 4.6rem) / 1.05 'Roboto Slab', Georgia, serif;
  color: #173d3b;
}
.text p {
  margin: 0;
  column-count: 2;
  column-gap: 3.5rem;
  font-size: 1.05rem;
  line-height: 2;
  text-align: justify;
  color: #7a7a7a;
}

/* Dean */
.dean {
  padding: 2rem 2rem 5rem;
  text-align: center;
}
.dean h3 {
  margin: 0 0 2.5rem;
  font: 300 clamp(2.6rem, 6vw, 4.2rem) / 1.1 'Roboto Slab', Georgia, serif;
  color: #173d3b;
}
.portrait {
  width: 495px;
  max-width: 100%;
  margin: 0 auto;
  border-bottom: 7px solid #fdaa26;
}
.portrait img {
  display: block;
  width: 100%;
  height: auto;
}
.portrait .empty {
  aspect-ratio: 4 / 5;
}

/* Coordinators, Faculty at Staff (parehong istilo) */
.group {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 2rem 5rem;
  text-align: center;
}
.label {
  margin: 0 0 0.4rem;
  font-size: 1.15rem;
  color: #6b6b6b;
}
.group h3 {
  margin: 0 0 3rem;
  font: 300 clamp(2rem, 4.5vw, 3.4rem) / 1.1 'Roboto Slab', Georgia, serif;
  color: #173d3b;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.card {
  margin: 0;
  border-bottom: 7px solid #fdaa26;
}
.card img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
}
.card .empty {
  aspect-ratio: 3 / 4;
}

/* kulay-abong kahon kapag walang larawan */
.empty {
  width: 100%;
  background: #e3e7e6;
}

@media (max-width: 900px) {
  .banner { padding: 4rem 1.25rem 3rem; }
  .people {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 1.25rem;
  }
  .text p { column-count: 1; }
  .dean { padding: 1rem 1.25rem 3rem; }
  .group { padding: 1rem 1.25rem 3rem; }
  .grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
}

@media (max-width: 520px) {
  .grid { grid-template-columns: 1fr; }
}
</style>