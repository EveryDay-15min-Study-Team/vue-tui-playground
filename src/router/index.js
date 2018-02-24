import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Notepad from '@/components/Notepad';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Notepad',
      component: Notepad,
    },
    {
      path: '/greeting',
      name: 'HelloWorld',
      component: HelloWorld,
    },
  ],
});
