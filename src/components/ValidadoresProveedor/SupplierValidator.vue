<template>
  <div id="module-component">
    <MenuComp></MenuComp>
    <div class="card">
      <h3>EFX - Configuración Portal Proveedores</h3>

      <supplierValidatorListVue />
    </div>
    <footerFreebug />
  </div>
</template>
      
  <script>
import MenuComp from "../MenuComponent.vue";
import footerFreebug from "../Commons/footerFreebug.vue";
import supplierValidatorListVue from './modules/supplierValidatorList.vue';
export default {
  name: "SupplierValidatorComponent",
  components: {
    MenuComp,
    footerFreebug,
    supplierValidatorListVue
  },
  data(){
    return{
    }
  },
//   methods: {
//       onClickChild (value) {
//         this.newConfig=value;
//           console.log(value) // someValue
//       }
//   }
};
</script>
  