<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
import router from './router'

export default {
  router
}
</script>

<style global>
  @import '../src/assets/css/reset.css';

  html, body, #app {
        width: 100%;
        height: 100%;
  }
  *:focus {
    outline:none;
  }
  a {
    color: black;
    text-decoration: none;
  }
  input {
    border: none;
  }
  button {
    border:none;
    cursor: pointer;
  }
</style>
