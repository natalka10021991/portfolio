import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './components/login';

const router = new VueRouter({
  routes: [
    { path: '/', component: Login}
  ]
});

Vue.use(VueRouter)

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});