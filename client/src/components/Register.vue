<template>
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      placeholder="email"
      v-model="email">

    <br>

    <input
      v-model="password"
      type="password"
      name="password"
      placeholder="password">

    <br>

    <button @click="register">Register</button>

  </div>
</template>

<script>
  import AuthenticationService from '@/services/AuthService'

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async register() {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        }).then((res) => {
          console.log(res.data)
        })
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
