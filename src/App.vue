<script setup>
import Toolbar from "./components/toolbar.component.vue";
</script>

<template>
  <header>
    <Toolbar />
  </header>
  <main>
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

<style scoped>

</style>
