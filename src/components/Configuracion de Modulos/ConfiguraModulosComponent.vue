<template>
  <div id="module-component">
    <MenuComp></MenuComp>
    <div class="card">
      <h3>Configuración de Módulos</h3>
      <!-- Formulario de configuración de módulos -->
      <moduleForm />
    </div>
    <footerFreebug/>
    
  </div>
</template>
    
<script>
import MenuComp from "../MenuComponent.vue";
import moduleForm from "./moduleForm.vue";
import footerFreebug from "../Commons/footerFreebug.vue";
export default {
  name: "DashboardComponent",
  data() {
    return {
      subtitulo: "Dashboard text",
    };
  },
  components: {
    MenuComp,
    moduleForm,
    footerFreebug
  },
};
</script>
