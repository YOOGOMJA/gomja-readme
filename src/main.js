// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';


/* eslint-disable */
import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// additional component
import VueScrollTo from 'vue-scrollto';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(VueScrollTo);

import { store } from './store/index';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
