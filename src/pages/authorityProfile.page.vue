<script setup>

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <img src="../assets/municipalidad.png" alt="Usuario" class="img" />
      </div>

      <div class="right">
        <p>Nombre de la Municipalidad: Municipalidad Distrital de La Victoria</p>
        <p>Correo: info@munilavictoria.gob.pe</p>
        <p>Número de Contacto: (01) 510-2070</p>
        <p>Dirección de Oficina: Av. Iquitos 500, La victoria 18018</p>
        <p>Descripción: Este perfil facilita la interacción entre la Municipalidad de La Victoria y los ciudadanos,
          permitiendo a las autoridades locales monitorear y responder a incidentes de seguridad. Encuentra aquí
          actualizaciones oficiales, alertas de seguridad y un enlace directo para reportar emergencias, todo enfocado
          en mejorar la seguridad y calidad de vida en el distrito.</p>
      </div>
    </div>
    <div class="buttons">
      <button>Edit Profile</button>
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
