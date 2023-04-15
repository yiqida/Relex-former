const DESIGN_WIDTH = 1920 // 设计稿统一为1920，这样设计稿中的像素值 / 100就是项目中css的rem值

export function initRemSize() {
  const setRem = () => {
    const html = document.documentElement
    const viewPortWidth = html.clientWidth || document.body.clientWidth
    html.style.fontSize = viewPortWidth / (DESIGN_WIDTH / 100) + 'px'
    console.log('html.style.fontSize', viewPortWidth)
  }

  window.onload = function() {
    setRem()
    window.addEventListener('resize', setRem, false)
  }
}
