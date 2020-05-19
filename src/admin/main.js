import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './components/login';
import AboutMe from './components/about-me/about-me';
import Works from './components/works/works';
import Feedback from './components/feedback/feedback';

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login},
    { path: '/', component: AboutMe},
    { path: '/works', component: Works},
    { path: '/feedback', component: Feedback}
  ]
});

Vue.use(VueRouter)

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});