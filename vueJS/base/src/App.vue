<template>
  <div id="app">
    <header1 />
    
    <div id="content" class="content">
      <router-view />
    </div>

  </div>
</template>

<script>

import header1 from "./components/layout/Header.vue";

export default {
  name: "App",
  components: {
    header1
  },
};
</script>

<style>
</style>
