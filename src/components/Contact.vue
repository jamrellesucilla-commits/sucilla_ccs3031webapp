<template>
  <section id="contact" class="contact">
    <div class="banner">
      <p class="kicker">We Will Gladly Assist You</p>
      <h2>Contact Details</h2>
    </div>

    <div class="items">
      <div class="item">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          />
        </svg>
        <h3>Telephone</h3>
        <p>329-1971 local 1094</p>
      </div>

      <div class="item">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          />
        </svg>
        <h3>CPU Mail</h3>
        <p><a href="mailto:ccssec@cpu.edu.ph">ccssec@cpu.edu.ph</a></p>
      </div>

      <div class="item">
        <svg viewBox="0 0 320 512" aria-hidden="true">
          <path
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
        <h3>Social Media</h3>
        <p>College of Computer Studies - CPU</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact { background: #fff; }

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

/* tatlong detalye */
.items {
  max-width: 1200px;
  margin: 0 auto;
  padding: 6rem 2rem 7rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem 2rem;
  text-align: center;
}
.item svg {
  display: block;
  height: 78px;
  width: auto;
  margin: 0 auto 1.4rem;
  fill: #fdaa26;
}
.item h3 {
  margin: 0 0 1.6rem;
  font: 500 2rem/1.2 'Roboto', sans-serif;
  color: #fdaa26;
}
.item p {
  margin: 0;
  font-size: 1.2rem;
  color: #6b6b6b;
}
.item a {
  color: inherit;
  text-decoration: none;
}
.item a:hover { color: #fdaa26; }

@media (max-width: 800px) {
  .banner { padding: 7rem 1.25rem 3rem; }
  .items {
    grid-template-columns: 1fr;
    padding: 3.5rem 1.25rem 4rem;
  }
}
</style>