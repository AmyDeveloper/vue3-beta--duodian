import 'vant/lib/index.css'

import { Button, Tabbar, TabbarItem } from 'vant'


const VanComponents = { Button, Tabbar, TabbarItem }

export default {
  install(Vue: any) {
    Object.entries(VanComponents).forEach(([key, component]) => {
      Vue.component(`Van${key}`, component)
    })
  },
}