import Vue from 'vue'
import PPVueLibrary from 'pp-vue-library'
import router from './router'
import store from './store'
import App from "./App.vue";

Vue.config.productionTip = false

Vue.use(PPVueLibrary)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
