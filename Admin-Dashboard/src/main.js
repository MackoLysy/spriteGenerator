import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'

import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'
import {
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbBtn,
  mdbToastNotification
} from "mdbvue";


Vue.use(VueGoogleMaps, {
  load: {
    libraries: 'places'
  }
})

Vue.component('mdb-modal', mdbModal);
Vue.component('mdb-modal-header', mdbModalHeader);
Vue.component('mdb-modal-title', mdbModalTitle);
Vue.component('mdb-modal-body', mdbModalBody);
Vue.component('mdb-modal-footer', mdbModalFooter);
Vue.component('mdb-btn', mdbBtn);
Vue.component('mdb-toast-notification', mdbToastNotification);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
