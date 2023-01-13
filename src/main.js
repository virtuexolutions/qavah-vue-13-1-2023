import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { firebaseConfig } from "@/constants/config"
import {getCurrentLanguage} from '@/utils'
import vuePerfectScrollbar from 'vue-perfect-scrollbar'
import '@/index';
import '@/assets/css/global.css'
import '@/assets/scss/custom.scss'
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import OtpInput from "@bachdgvn/vue-otp-input";
import VueHotkey from 'v-hotkey'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { VueSpinners } from '@saeris/vue-spinners'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLoadmore from 'vuejs-loadmore';
import VueCookieAcceptDecline from 'vue-cookie-accept-decline';
import 'vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css';
Vue.component('vue-cookie-accept-decline', VueCookieAcceptDecline);
Vue.use(VueLoadmore);
Vue.use(VueSpinners)
Vue.use(VueToast);
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueHotkey)
Vue.component("v-otp-input", OtpInput);


import Notifications from '@/components/Notification'
Vue.use(Notifications);

// Import the tooltip component and option types
import VueCustomTooltip from '@adamdehaven/vue-custom-tooltip'

// 2. Initialize with custom options (defaults shown)
Vue.use(VueCustomTooltip, {
  name: 'VueCustomTooltip',
  color: '#fff',
  background: '#000',
  fontWeight: 400,
})

Vue.use(LottieVuePlayer);

// Multi Language Add
import en from './locales/en.json'
import es from './locales/es.json'








// import I18n from 'vue-i18n'
// const messages = { en: en, es: es };
// const locale = getCurrentLanguage();
// const i18n = new I18n({
//   locale: locale,
//   fallbackLocale: 'en',
//   messages
// });
// Vue.use(i18n);


import {setCurrentUser} from '@/utils/index';
//import firebase from 'firebase/app'
import {apiUrl} from '@/constants/config';
import axios from 'axios';
import {io} from "socket.io-client";



import "./userPresence";

// import('./sockets')

// Global Components 
Vue.component('vue-perfect-scrollbar', vuePerfectScrollbar);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

