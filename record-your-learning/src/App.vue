<template>
  <div id="app">
    <login-page></login-page>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'

export default {
  components: {
    'LoginPage': LoginPage
  }
}
</script>

<style global>
  @import '../src/assets/css/reset.css';

  html, body, #app {
        width: 100%;
        height: 100%;
  }
  *:focus {outline:none;}
</style>
