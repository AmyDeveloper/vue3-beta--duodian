;(function(window, document) {
  function resize() {
    const ww = window.innerWidth // 窗口的内部宽度 (包含滚动条)
    if (ww > window.screen.width) { // 返回屏幕的宽度
      window.requestAnimationFrame(resize)
    } else {
      // 设计图 以720为宽时
      // if (ww > 720) {
      //   ww = 720
      // }
      // document.documentElement!.style.fontSize = (ww * 100) / 720 + 'px'
      document.documentElement!.style.fontSize = (ww * 100) + 'px'
      document.body.style.opacity = '1'
    }
  }

  if (document.readyState !== 'loading') {
    resize()
  } else {
    document.addEventListener('DOMContentLoaded', resize)
  }

  window.addEventListener('resize', resize)
})(window, document)


