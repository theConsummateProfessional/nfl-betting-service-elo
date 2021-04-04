import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import vSelect from 'vue-select'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('v-select', vSelect);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
