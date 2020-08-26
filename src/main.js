import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import { Form, FormItem, Checkbox, CheckboxGroup, Input } from 'xlui-dev'
// Vue.use(Form).use(FormItem).use(Checkbox).use(CheckboxGroup).use(Input)
// import xlui from 'xlui-dev/dist/xlui.js'
import xlui from 'xlui-dev'
import 'xlui-dev/dist/styles/xlui.css'
Vue.use(xlui)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
