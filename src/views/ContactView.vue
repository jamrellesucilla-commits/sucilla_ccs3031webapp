<script setup>
import { reactive, ref } from 'vue'
import Contact from '../components/Contact.vue'

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function validate() {
  errors.name = form.name.trim() ? '' : 'Please enter your name.'
  errors.email = /^\S+@\S+\.\S+$/.test(form.email) ? '' : 'Please enter a valid email.'
  errors.message = form.message.trim().length >= 10 ? '' : 'Message must be at least 10 characters.'
  return !errors.name && !errors.email && !errors.message
}

function submit() {
  sent.value = false
  if (!validate()) return
  sent.value = true // demonstration lang: walang tunay na pagpapadala
  form.name = form.email = form.message = ''
}
</script>

<template>
  <Contact />

  <section class="wrap">
    <h2>Send us a message</h2>
    <p class="demo">Demonstration only. Messages are not actually sent.</p>

    <div class="field">
      <label for="name">Name</label>
      <input id="name" v-model="form.name" type="text" />
      <small v-if="errors.name">{{ errors.name }}</small>
    </div>
    <div class="field">
      <label for="email">Email</label>
      <input id="email" v-model="form.email" type="email" />
      <small v-if="errors.email">{{ errors.email }}</small>
    </div>
    <div class="field">
      <label for="message">Message</label>
      <textarea id="message" v-model="form.message" rows="5"></textarea>
      <small v-if="errors.message">{{ errors.message }}</small>
    </div>

    <button class="btn" @click="submit">Send</button>
    <p v-if="sent" class="ok">Thank you! Your message was submitted (demo).</p>
  </section>
</template>

<style scoped>
.wrap { max-width: 640px; margin: 0 auto; padding: 2rem 1.5rem 5rem; }
h2 { font: 400 2rem 'Roboto Slab', Georgia, serif; color: #173d3b; }
.demo { font-size: 0.85rem; font-style: italic; color: #999; }
.field { display: flex; flex-direction: column; margin-bottom: 1.2rem; }
label { margin-bottom: 0.3rem; font-weight: 500; color: #173d3b; }
input, textarea { padding: 0.7rem; border: 1px solid #ccc; border-radius: 4px; font: inherit; }
small { margin-top: 0.3rem; color: #c0392b; }
.btn { padding: 0.8rem 2rem; border: 0; border-radius: 4px; background: #fdaa26; color: #173d3b; font-weight: 500; cursor: pointer; }
.ok { margin-top: 1rem; color: #1b5e3b; font-weight: 500; }
</style>
