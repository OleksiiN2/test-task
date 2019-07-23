import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from "vue";
import './plugins/bootstrap-vue'
import App from "./App.vue";
import router from "./router";
import store from "./store";
//import "materialize-css";
//import "bootstrap/dist/css/bootstrap.css";
import VueCarousel from "@chenfengyuan/vue-carousel/dist/vue-carousel";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//import 'bootstrap-css-only/css/bootstrap.css';
//import 'mdbvue/build/css/mdb.css';

//import "material-design-icons";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueCarousel);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
