import Form from './components/form'
import FormItem from './components/form-item'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
import Alert from './components/alert'
import Table from './components/table'
import Tree from './components/tree'

const components = {
  Form,
  FormItem,
  Checkbox,
  CheckboxGroup,
  Alert,
  Table,
  Tree
}

// eslint-disable-next-line no-unused-vars
const install = function (Vue, opts = {}) {
  if (install.installed) return
  // locale.use(opts.locale)
  // locale.i18n(opts.i18n)

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })

  Vue.prototype.$Alert = Alert
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: process.env.VERSION,
  install
}
