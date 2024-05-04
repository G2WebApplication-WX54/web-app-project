<script setup>
import Toolbar from "./components/toolbar.component.vue";

//To-do: Debe moverse a donde sera utilizado
//import ReportListComponent from "./reports/report-list.component.vue";
//import MunicipalityReportListComponent from "./reports/municipality-report-list.component.vue";
//export default{
  //name: "app",
  //components: {ReportListComponent, MunicipalityReportListComponent}
//}
</script>

<template>
  <div>
    <Toolbar/>
  </div>
  <main>
    <div class="container">
      <router-view/>
      <!--To-do: Mover a donde se utilizara-->
      <!--<MunicipalityReportListComponent></MunicipalityReportListComponent>-->
    </div>
  </main>
</template>
<style scoped>
</style>