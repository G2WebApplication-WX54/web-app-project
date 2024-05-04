<script setup>

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <img src="../assets/Anatoly.png" alt="Usuario" class="img" />
      </div>

      <div class="right">
        <p>Full name: Anatoly Andrey noriega Suschenko</p>
        <p>E-mail: lorersz@gmail.com</p>
        <p>District: Breña</p>
        <p>Route Type: Safe</p>
        <p>Alert Frequency: High</p>
        <p>Location: NA</p>
        <p>Description: Enthusiastic advocate of community safety and active user of the platform. I dedicate myself
          to share crucial information and stay on top of updates to ensure transfers safe for me and others.</p>
      </div>
    </div>
    <div class="buttons">
      <router-link to="/edit-profile">
        <button>Edit Profile</button>
      </router-link>
      <router-link to="/">
        <button>Log Out</button>
      </router-link>
      <button>Delete Account</button>
    </div>
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
  font-size: 20px;
  height: 45px;
  width: 30%;
}
.container {
  background-color: #6DC9FF;
  margin-top: 60px;
  padding: 40px;
  width: 90%;
  max-width: 1000px;
  height: auto;
}
.content {
  display: flex;
}

.img{
  width: 22vw;
}
.left {
  margin-right: 20px;
  display: flex;
  align-items: center;
}
.right {
  font-family: 'Montserrat', sans-serif;
  color: black;
  text-align: justify;
  font-weight: bold;
  font-size: 18px;
}
</style>
