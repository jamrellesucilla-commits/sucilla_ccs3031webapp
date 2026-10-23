<script setup>
import bg from '../assets/ccs.jpg'
</script>

<template>
  <section id="home" class="hero" :style="{ '--bg': `url(${bg})` }">
    <div class="content">
      <p class="tagline">the CCS core practices that build bridges between gaps</p>
      <h1>REMEMBER<br />CONNECT<br />ENGAGE<br />BUILD<br />SHARE</h1>
      <h3 class="sub">different PEOPLE, ONE goal</h3>
      <a href="#programs" class="btn">Your FUTURE begins HERE</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 4rem 5rem;
  color: #fff;

  /* mascot: malaki, nasa kanan, halos buong taas */
  background-color: #0f2a30;
  background-image: var(--bg);
  background-repeat: no-repeat;
  background-position: right center;
  background-size: auto 120%;
  background-blend-mode: multiply;
}

.content {
  position: relative;
  z-index: 1;
}

.tagline {
  margin: 0 0 1.5rem;
  font-weight: 500;
  color: #b5bcbc;
}
h1 {
  margin: 0 0 1.5rem;
  font-size: 4.2rem;
  line-height: 1;
  font-weight: 500;
}
.sub {
  margin: 0 0 3rem;
  font-size: 2.1rem;
  font-weight: 400;
  color: #f5a623;
}
.btn {
  display: inline-block;
  padding: 1.1rem 3rem;
  background: #fbb034;
  color: #0f2a30;
  font-weight: 500;
  text-decoration: none;
  border-radius: 6px;
}

@media (max-width: 900px) {
  .hero {
    background-size: auto 80%;
    background-position: right -20% center;
  }
}
@media (max-width: 600px) {
  .hero { padding: 6rem 1.5rem 3rem; }
  h1 { font-size: 2.6rem; }
  .sub { font-size: 1.4rem; }
}
</style>