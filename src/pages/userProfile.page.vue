<script setup>

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <img src="../assets/Anatoly.png" alt="Usuario" class="img" />
      </div>

      <div class="right">
        <p>Nombre completo: Anatoly Andrey noriega Suschenko</p>
        <p>Correo: lorersz@gmail.com</p>
        <p>Distrito: Breña</p>
        <p>Tipo de Ruta: Segura</p>
        <p>Frecuencia de Alertas: Alta</p>
        <p>Ubicación: NA</p>
        <p>Descripción: Entusiasta defensor de la seguridad comunitaria y usuario activo de la plataforma. Me dedico
        a compartir información crucial y a mantenerme al tanto de las actualizaciones para garantizar traslados
        seguros para mí y para los demás.</p>
      </div>
    </div>
    <div class="buttons">
      <button>Edit Profile</button>
      <button>Logout</button>
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