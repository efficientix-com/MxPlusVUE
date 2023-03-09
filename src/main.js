import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes/routes';


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faBars,faFire,faHomeUser,faScrewdriverWrench,faCircleExclamation,faGears,faUserGraduate, faTruckField, faRectangleXmark } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faBars)
library.add(faFire)
library.add(faHomeUser)
library.add(faScrewdriverWrench)
library.add(faCircleExclamation)
library.add(faUserGraduate)
library.add(faGears)
library.add(faTruckField)
library.add(faRectangleXmark)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(VueRouter);
const router=new VueRouter({
routes:routes
});


new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
