<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MiComponente/> -->
    <router-view>
      <DashboardComponent/>
    </router-view>
    <!-- <DashboardComponent/> -->
    <!-- El RequestComponent tiene ejemplo de mandar a NS y recibir respuesta de NS -->
    <!-- <RequestComponent/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import MiComponente from './components/MiComponente.vue';
// import RequestComponent from './components/RequestComponent.vue';
import DashboardComponent from "./components/DashboardComponent.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // MiComponente,
    DashboardComponent: DashboardComponent,
    // RequestComponent
  },
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss'
</style>
