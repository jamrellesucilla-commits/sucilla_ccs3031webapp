<script setup>
import photo from '../assets/ting.jpg'
</script>

<template>
  <section id="dean" class="dean">
    <div class="wrap">
      <div class="photo">
        <img :src="photo" alt="Ma. Christina A. Quijano, MSCS, Dean" />
      </div>

      <div class="text">
        <p class="eyebrow">ENGAGE</p>
        <h2>Message from the Dean</h2>

        <p class="msg">
          In every school year for the College of Computer Studies, we look forward with great
          anticipation to the contributions the new class will make to campus life. In both the
          aspect of academic and non academic, each students is unique enough to achieve whatever
          they want to reach for in our college.
        </p>

        <p class="sign">
          Ma. Christina A. Quijano, MSCS
          <span>Dean</span>
        </p>

        <div class="actions">
          <a href="#faculty" class="btn">READ MORE</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dean {
  padding: 3rem 2rem;
  background: #fff;
}

.wrap {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 3rem;
  align-items: center;
}

.photo img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 28px;
  object-fit: cover;
}

.eyebrow {
  margin: 0 0 0.3rem;
  font-size: 1rem;
  font-weight: 700;
  color: #0f3d33;
}

h2 {
  margin: 0 0 1rem;
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  line-height: 1.1;
  font-weight: 700;
  font-style: italic;
  color: #fdaa26;
}

.msg {
  margin: 0;
  font-size: 1rem;
  line-height: 1.9;
  color: #7a7a7a;
}
.msg::first-letter {
  float: left;
  margin: 0.1rem 0.4rem 0 0;
  font-size: 2.8rem;
  line-height: 0.8;
  color: #fdaa26;
}

.sign {
  margin: 1.5rem 0 0;
  text-align: right;
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.2;
  color: #fdaa26;
}
.sign span { display: block; }

.actions {
  margin-top: 1.2rem;
  text-align: right;
}
.btn {
  display: inline-block;
  padding: 0.7rem 1.5rem;
  background: #fdaa26;
  color: #0f3d33;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
}
.btn:hover { background: #f5a623; }

@media (max-width: 800px) {
  .dean { padding: 2rem 1.25rem; }
  .wrap {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .photo { max-width: 320px; margin: 0 auto; }
}
</style>
