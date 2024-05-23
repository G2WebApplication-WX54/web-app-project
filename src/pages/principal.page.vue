<script>
export default {
  methods: {
    redirectLanding() {
      const Link = 'https://g2webapplication-wx54.github.io/landing-page-web-app/';

      window.location.href = Link;
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="box1">
      <img class="logo" src="/src/assets/PeaceApp.png" alt="logo" />
      <h2 class="info">For more info, check out our Landing Page and discover what we offer</h2>
      <button @click="redirectLanding">More Information</button>
    </div>
    <div class="box2">
      <h2>Welcome to Peace App</h2>
      <h3>Please, log in to start</h3>
      <input type="text" class="textbox" style="width: 80%;" placeholder="E-mail">
      <input type="text" class="textbox" style="width: 80%;" placeholder="Password">
      <router-link to="/government/map">
        <button>Log in</button>
      </router-link>
      <h4>Forgot your password? <a href="#">Click here</a></h4>
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
  width: 40%;
}

.box2{
  background-color: #6DC9FF;
}

.info{
  padding: 50px;
}
.container {
  display: flex;
  font-family: 'Montserrat', sans-serif;
  color: black;
  padding: 20px;
  flex-wrap: wrap;
  height: auto;
  text-align: center;
  margin: 0;
  place-items: center;
  min-width: 500px;
  min-height: 100vh;
}
.textbox {
  font-size: 20px;
  margin-bottom: 10px;
}

.box1, .box2 {
  flex: 1;
  padding: 20px;
  margin: 10px;
  width: 100%;
}

.textbox {
  width: 100%;
  box-sizing: border-box;
}



</style>