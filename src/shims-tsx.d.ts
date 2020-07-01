import Vue, { VNode } from 'vue'
import { Toast } from 'vant'
import handleError from '@/lib/error-handler'


declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode
    // tslint:disable no-empty-interface
    type ElementClass = Vue
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
  interface Window {
    vue: Vue
  }
}



declare module 'vue/types/vue' {
  interface Vue {
    $toast: Toast
    $handleError: handleError
  }
}

