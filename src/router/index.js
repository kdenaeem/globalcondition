import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { LayoutPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import { VBScrollspyPlugin } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import { NavPlugin } from 'bootstrap-vue'
Vue.use(NavPlugin)
Vue.use(DropdownPlugin)
Vue.use(CardPlugin)
Vue.use(TablePlugin)
Vue.use(ModalPlugin)
Vue.use(LayoutPlugin)
Vue.use(VBScrollspyPlugin)
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
