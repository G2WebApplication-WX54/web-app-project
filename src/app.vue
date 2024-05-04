<script >
import ReportListComponent from "./reports/report-list.component.vue";
import MunicipalityReportListComponent from "./reports/municipality-report-list.component.vue";
export default{
  name: "app",
  components: {ReportListComponent, MunicipalityReportListComponent}
}
</script>

<template>
<MunicipalityReportListComponent></MunicipalityReportListComponent>
</template>

<style scoped>

</style>
