import 'vant/lib/index.css'

import { Button } from 'vant'


const VanComponents = { Button }

export default {
  install(Vue: any) {
    Object.entries(VanComponents).forEach(([key, component]) => {
      Vue.component(`Van${key}`, component)
    })
  },
}