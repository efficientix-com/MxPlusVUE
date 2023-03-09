<template>
  <div id="module-component">
    <MenuComp></MenuComp>
    <div class="card">
      <h3>EFX - Nueva Configuración Portal Proveedores</h3>
      <supplierValidatorModule />
    </div>
    <footerFreebug />
  </div>
</template>
        
    <script>
import MenuComp from "../MenuComponent.vue";
import footerFreebug from "../Commons/footerFreebug.vue";
import supplierValidatorModule from "./modules/supplierValidatorModule.vue";
export default {
  name: "NewSupplierConfig",
  components: {
    MenuComp,
    footerFreebug,
    supplierValidatorModule,
    
  },
  data() {
    return {
    };
  },
  methods: {
    
  },
};
</script>
    