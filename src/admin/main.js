import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Login from './components/login';
import AboutMe from './components/about-me/about-me';
import Works from './components/works/works';
import Feedback from './components/feedback/feedback';
import Header from './components/header/header';
import Nav from './components/nav/nav';


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
  render: h => h(App)
});
