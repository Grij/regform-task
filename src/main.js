import Vue from 'vue'
import App from './App.vue'
import VueMask from 'v-mask'
import Vuelidate from 'vuelidate'




import '@/assets/style/app.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueMask);
Vue.use(Vuelidate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
