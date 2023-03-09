import DashboardComponent from '../components/DashboardComponent.vue';
// import MiComponente from '../components/MiComponente.vue';
import ConfiguraModulosComponent from '../components/Configuracion de Modulos/ConfiguraModulosComponent.vue';
import SupplierValidator from '../components/ValidadoresProveedor/SupplierValidator.vue';
import NewSupplierConfig from '../components/ValidadoresProveedor/NewSupplier.vue';


export default[
    {path:"/",component:DashboardComponent},
    {path:'/configure-modules',component:ConfiguraModulosComponent},
    {path:'/supplier-validator',component:SupplierValidator},
    {path:'/new-configsupplier',component:NewSupplierConfig},
    

]