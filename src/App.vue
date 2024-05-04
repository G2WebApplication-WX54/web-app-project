<script setup>
import Toolbar from "./components/toolbar.component.vue";

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
<style>
body {
  background-color: #01a1ff;
}
.send-alert{
  align-items: center;

}
</style>

