import Vue from 'vue';
import VueRouter from 'vue-router';
import { store } from "./store"
import axios from "./requests"
import App from './App.vue';
import Login from './pages/login';
import AboutMe from './pages/about-me/about-me';
import Works from './pages/works/works';
import Feedback from './pages/feedback/feedback';
import Header from './pages/header/header';
import Nav from './pages/nav/nav';

store.$axios = axios;

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login},
    { path: '/', components: {
        default: AboutMe,
        header: Header,
        nav: Nav
      }
    },
    { path: '/works', components: {
      default: Works,
      header: Header,
      nav: Nav
    }},
    { path: '/feedback', components: {
      default: Feedback,
      header: Header,
      nav: Nav
    }}
  ]
});

Vue.use(VueRouter)

new Vue({
  el: "#app-root",
  router,
  store,
  render: h => h(App)
});
