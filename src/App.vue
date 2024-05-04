<script setup>
import Toolbar from "./components/toolbar.component.vue"
</script>

<template>
  <div>
    <Toolbar/>
  </div>
  <main>
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.logo:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
