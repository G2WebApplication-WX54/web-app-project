<script setup>

</script>

<template>
  <div>
    <router-link to="/userProfile">
      <button>User</button>
    </router-link>
    <router-link to="/authorityProfile">
      <button>Authority</button>
    </router-link>
  </div>
</template>

<style scoped>
button {
  background-color: #EEF221;
  color: #161616;
  font-weight: bolder;
  border: none;
  border-radius: 0.25em;
  padding: 0.5em 1em;
  margin: 0.5em;
  cursor: pointer;
}
</style>
