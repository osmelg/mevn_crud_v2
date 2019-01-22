import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false
// Middlewares
  Vue.use(VueSweetalert2);
  Vue.use(VeeValidate);
// Validaciones VeeValidate
  const dictionary = {
    spa:{
      custom: {
        nombre: {
          required:'Debe colocar un nombre'
        },
        email: {
          email:'Introduzca un email valido',
          required:'Debe colocar un email',
        },
        password: {
          required:'Debe colocar un password',
          min_value:'La contraseña debe tener al menos 2 digitos'
        }
      }    
    }
  };
  Validator.localize(dictionary);
  const validator = new Validator();
  validator.localize('spa'); 


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')