<script setup>
import logo from '../assets/logo-ccs.png'
</script>

<template>
  <section id="story" class="story">
    <img class="big-logo" :src="logo" alt="" aria-hidden="true" />

    <div class="content">
      <p class="eyebrow">REMEMBER</p>
      <h2>HOW IT STARTED</h2>

      <div class="card">
        <p>
          The college began in 1995 with the birth of the Bachelor of Science in Computer Science
          (BSCS) program under the College of Commerce. The first batch of students was composed of
          two sections with about 100 students. Prof. Mary O’ T. Penetrante was appointed to be the
          faculty-in-charge of the new program.
        </p>
      </div>

      <div class="actions">
        <a href="#dean" class="btn">READ MORE</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 2rem 2rem;
  background: #e5e5e5;
}

.big-logo {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  width: 220px;
  max-width: 22vw;
  height: auto;
  filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.35));
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-left: 3%;
}

.eyebrow {
  margin: 0 0 0.2rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: #0f3d33;
}

h2 {
  margin: 0 0 0.7rem;
  font-size: 2.2rem;
  line-height: 1;
  font-weight: 700;
  font-style: italic;
  color: #fdaa26;
}

.card {
  max-width: 480px;
  padding: 1rem 1.1rem;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid #d6d6d6;
  border-radius: 14px;
}
.card p {
  margin: 0;
  font-size: 0.88rem;
  line-height: 1.7;
  text-align: justify;
  color: #7a7a7a;
}
.card p::first-letter {
  float: left;
  margin: 0.1rem 0.4rem 0 0;
  font-size: 2.4rem;
  line-height: 0.8;
  color: #fdaa26;
}

.actions {
  max-width: 480px;
  margin-top: 0.8rem;
  text-align: right;
}
.btn {
  display: inline-block;
  padding: 0.55rem 1.2rem;
  background: #fdaa26;
  color: #0f3d33;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
}
.btn:hover { background: #f5a623; }

@media (max-width: 900px) {
  .story { padding: 2rem 1.25rem; }
  .big-logo {
    right: -6%;
    width: 40vw;
    opacity: 0.2;
  }
  .content { padding-left: 0; }
}
</style>
