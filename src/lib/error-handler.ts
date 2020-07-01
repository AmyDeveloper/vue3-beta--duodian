const serverError = 'Network Error, please try again later.'


const handleError = function(error: { code: string; message: string; response: any }) {
  // console.error(error)
  if (error.response) {
    console.log('error.response')
    window.vue.$toast.fail(serverError)
  } else {
    console.log('normal error')
    window.vue.$toast.fail(error.message)
  }
}

export default handleError
