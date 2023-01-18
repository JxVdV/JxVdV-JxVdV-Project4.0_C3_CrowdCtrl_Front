import Navigation from './components/Navigation.vue';

<template>
  <TheNavigation />
  <main class="container mx-auto py-6">
    <router-view />
  </main>
</template>

<script>
import TheNavigation from './components/shared/TheNavigation.vue';
export default {
  components: { TheNavigation },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#appColor {
  background-color: black;
}

nav a.router-link-exact-active {
  color: #de6107;
}
</style>
