import _Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $handleError: (error: any) => void
  }
  interface VueConstructor<V extends Vue> {
    handleError: (error: any) => void
  }
}

const serverError = 'Network Error, please try again later.'

const errorHandler = { install(Vue: typeof _Vue, options?: any) {
  Vue.handleError = (error: { code: string; message: string; response: any }) => {
    // console.error(error)
    if (error.response) {
      console.log('error.response')
      window.vue.$toast.fail(serverError)
    } else {
      console.log('normal error')
      window.vue.$toast.fail(error.message)
    }
  }
  Vue.prototype.$handleError = Vue.handleError
} }

export default errorHandler
