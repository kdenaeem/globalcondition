import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { BSidebar } from 'bootstrap-vue'
import { BCollapse } from 'bootstrap-vue'
import { VBTogglePlugin } from 'bootstrap-vue'
Vue.use(VBTogglePlugin)
Vue.component('b-collapse', BCollapse)

Vue.component('b-sidebar', BSidebar)
import { LayoutPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import { VBScrollspyPlugin } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import { BButton } from 'bootstrap-vue'
Vue.component('b-button', BButton)
Vue.use(DropdownPlugin)
Vue.use(CardPlugin)
Vue.use(TablePlugin)
Vue.use(ModalPlugin)
Vue.use(LayoutPlugin)
Vue.use(VBScrollspyPlugin)

import '../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false



new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
