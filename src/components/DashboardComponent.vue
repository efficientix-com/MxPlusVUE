<template>
  <div id="dashboard-component">
    <MenuComp></MenuComp>
  </div>
</template>
  
  <script>
import MenuComp from './MenuComponent.vue';
export default {
    name: "DashboardComponent",
    components: { MenuComp }
};
</script>