<script setup>
// You can import other components or utilities here if needed.
</script>

<template>
  <nav class="toolbar">
    <ul class="left-icons">
      <li><img src="../assets/PeaceApp.png" alt="PeaceApp" /></li> <!-- Left-aligned icon -->
    </ul>
    <ul class="right-icons">

      <li><a href="/citizen/map"><img src="../assets/Map.png" alt="Map" /></a></li>
      <li><a href="/report"><img src="../assets/Report.png" alt="Report" /></a></li>
      <li><a href="/notifications"><img src="../assets/Notification.png" alt="Notification" /></a></li>
      <li><a href="/profile"><img src="../assets/Profile.png" alt="Profile" /></a></li>
    </ul>
  </nav>
</template>
<style scoped>
.toolbar {
  background-color: #1878F3;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;  /* Initial padding for large screens */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.toolbar .left-icons, .toolbar .right-icons {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.toolbar .right-icons {
  margin-right: 40px;  /* Reduced initial right margin for better screen usage */
}

.toolbar .left-icons {
  margin-left: 30px;  /* Reduced initial left margin */
}

.toolbar .right-icons li {
  margin-left: 15px;  /* Initial spacing between items */
}

.left-icons img {
  height: 80px;  /* Initial icon size */
  width: auto;
}
.right-icons img {
  height: 50px;  /* Initial icon size */
  width: auto;
}
.toolbar a {
  display: inline-block;
}

.toolbar a:hover img {
  opacity: 0.8;  /* Hover effect for icons */
}

/* Media Queries for different screen sizes */

@media (max-width: 768px) {
  .toolbar {
    padding: 8px 10px;  /* Further reduced padding for small tablets and large phones */
  }

  .toolbar .right-icons li {
    margin-left: 10px;  /* Reduced spacing between items */
  }

  .right-icons img {
    height: 30px;  /* Further reduction in icon size */
  }
  .left-icons img {
    height: 50px;  /* Further reduction in icon size */
  }
}

@media (max-width: 480px) {
  .toolbar {
    padding: 5px 8px;  /* Minimal padding for very small screens */
  }

  .toolbar .right-icons {
    margin-right: 200px;  /* Adjusted margin for right-aligned icons */
  }

  .toolbar .right-icons li {
    margin-left: 5px;  /* Minimal spacing between items */
  }

  .left-icons img {
    height: 30px;  /* Further reduction in icon size */
  }

  .right-icons img {
    height: 20px;  /* Smallest icon size for mobile devices */
  }
}

</style>

