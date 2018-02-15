// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from 'axios';


/* eslint-disable */
import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// additional component
import VueScrollTo from 'vue-scrollto';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

Vue.use(VueScrollTo);

import { store } from './store/index';

// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'
/* Register component with one of 2 methods */
import Icon from 'vue-awesome/components/Icon'
// globally (in your main .js file)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
