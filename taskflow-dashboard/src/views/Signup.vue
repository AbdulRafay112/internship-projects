<!-- src/views/Signup.vue -->
<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
    <p>Already have an account? <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default {
   name: "SignupView",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password)
        this.$router.push('/dashboard')
      } catch (err) {
        alert(err.message)
      }
    }
  }
}
</script>
