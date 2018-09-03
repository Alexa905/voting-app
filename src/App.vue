<template>
  <div id="app">
    <app-header></app-header>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import AppHeader from './components/Header.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
  },
};
</script>

<style>
  body, html{
    margin: 0;
    min-height: 100%;
    background: #EAEAEA;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    background: #EAEAEA;
  }

  .content {
    width: 960px;
    margin: 0 auto;
  }
</style>
