window.onload = function () {
  getMUi()

  // 监听事件
  let date = new Date()
  let d = date.getDate() + ''
  let table = document.getElementById('table')
  table.addEventListener('click', function () {
    let td = event.srcElement
    let span = document.getElementsByTagName("span")

    // 切换日期
    for (let i = 0; i < span.length; i++) {
      if (d === span[i].innerHTML) {
        span[i].setAttribute("class", "todays")
      } else {
        span[i].setAttribute("class", "#")
      } 
    }
    
    for (let i = 0; i < span.length; i++) {
      if (td === span[i]) {
        td.setAttribute("class", "click")
      }
      if (td.innerHTML === d) {
          td.setAttribute("class", "today")
        }
    }
  })

  let inp1 = document.getElementById('inp1')
  inp1.addEventListener('click', function () {
    getYUi()
  })
  // button today
  let inp2 = document.getElementById('inp2')
  inp2.addEventListener('click', function () {
    getMUi()
    let span = document.getElementsByTagName("span")
      for (let i = 0; i < span.length; i++) {
        if (d === span[i].innerHTML) {
          span[i].setAttribute("class", "today")
        } else {
          span[i].setAttribute("class", "#")
        } 
      }
  })
}
