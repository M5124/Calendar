// 监听事件
function addEventListern () {
  let date = new Date()
  let d = date.getDate() + ''
  let mid = document.getElementById('content-mid')
  mid.addEventListener('click', function () {
    let m = date.getMonth() + 1
    let y = date.getFullYear()
    let mouth = Math.floor(inp1.value.replace('月', '').split('年')[1])
    let year = Math.floor(inp1.value.replace('月', '').split('年')[0])
    let eventSpan = event.srcElement
    let span = document.getElementsByTagName("span")

    // 切换日期
    for (let i = 0; i < span.length; i++) {
      if (d === span[i].innerHTML && m === mouth && y === year) {
        span[i].setAttribute("class", "todays")
      } else {
        span[i].setAttribute("class", "#")
      }
    }
    
    for (let i = 0; i < span.length; i++) {
      if (eventSpan === span[i] && eventSpan.innerHTML !== ' ') {
        eventSpan.setAttribute("class", "click")
      }
      if (eventSpan.innerHTML === d && m === mouth && y === year) {
          eventSpan.setAttribute("class", "today")
        }
    }
  })

  let inp1 = document.getElementById('inp1')
  inp1.addEventListener('click', function () {
    if (inp1.value.length > 5 && inp1.value.length <= 8) {
      let year = Math.floor(inp1.value.replace('月', '').split('年')[0])
      getMouthUi(year)
      // // mouth change
      // let mTable = document.getElementById('mTable')
      // //let inp1 = document.getElementById('inp1')
      // mTable.addEventListener('click', function () {
      //   let year = Math.floor(inp1.value.replace('年', ''))
      //   let mouth = Math.floor(event.srcElement.innerHTML)
      //   getDayUi(year, mouth)
      // })
      // console.log(inp1.value.length)
    } else {
      getYearUi()
      // mTable.addEventListener('click', function () {
      //   let year = Math.floor(event.srcElement.innerHTML)
      //   getMouthUi(year)
      // })
    }
  })

  // button today
  let inp2 = document.getElementById('inp2')
  inp2.addEventListener('click', function () {
    getDayUi()
    let span = document.getElementsByTagName("span")
      for (let i = 0; i < span.length; i++) {
        if (d === span[i].innerHTML) {
          span[i].setAttribute("class", "today")
        } else {
          span[i].setAttribute("class", "#")
        } 
      }
  })

  // up
  let up = document.getElementById('inpUp')
  up.addEventListener('click', function () {
    let len = inp1.value.length
    if (len >= 7 && len <= 8) {
      let mouth = Math.floor(inp1.value.replace('月', '').split('年')[1])
      let year = Math.floor(inp1.value.replace('月', '').split('年')[0])
      if (mouth === 1) {
        year = year - 1
        mouth = 12
        getDayUi(year, mouth)
      } else {
        getDayUi(year, mouth - 1)
      }
    } else if (len <= 5) {
      let year = Math.floor(inp1.value.replace('月', '').split('年')[0])
      getMouthUi(year - 1)
    } else {
      let year = Math.floor(inp1.value.split('-')[0])
      getYearUi(year - 12)
    }
  })

  // down
  let down = document.getElementById('inpDown')
  down.addEventListener('click', function () {
    let len = inp1.value.length
    if (len >= 7 && len <= 8) {
      let mouth = Math.floor(inp1.value.replace('月', '').split('年')[1])
      let year = Math.floor(inp1.value.replace('月', '').split('年')[0])
      if (mouth === 12) {
        year = year + 1
        mouth = 1
        getDayUi(year, mouth)
      } else {
        getDayUi(year, mouth + 1)
      }
    } else if (len <= 5) {
      let year = Math.floor(inp1.value.replace('月', '').split('年')[0])
      getMouthUi(year + 1)
    } else {
      let year = Math.floor(inp1.value.split('-')[1])
      getYearUi(year + 1)
    }
  })
}
