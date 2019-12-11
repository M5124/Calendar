function getDayUi(y =0, m) {
  // 清除当前页
  let mid = document.getElementById('content-mid')
  mid.innerHTML = ''
  let date = new Date()
  let dYear = date.getFullYear()
  let dMouth = date.getMonth() +1
  let dDay = date.getDate()
  let dWeek = date.getDay()

  let week = ['日', '一', '二', '三', '四', '五', '六']
  
  // 生成 星期 、天
  let table = document.createElement('table')
  table.setAttribute("cellspacing", "0")
  table.setAttribute("id", "dTable")
  table.setAttribute("class", "day-table")
  
  // 添加星期信息
  {
    let tr = document.createElement('tr')
    for (let i = 0; i < 7; i++) {
      let th = document.createElement('th')
      th.innerHTML = week[i]
      tr.appendChild(th)
    }
    table.appendChild(tr)
  }
  //添加日期信息
  {
    // 判断年 月
    let year, mouth
    if (m) {
      year = y
      mouth = m
    } else {
      year = dYear
      mouth = dMouth
    }

    // 生成 年 月
    let inp1 = document.getElementById('inp1')
    if (m) {
      inp1.value = year + '年' + mouth + '月'
    } else {
      inp1.value = year + '年' + mouth + '月'
    }

    // 判断一月多少天
    let longMouth = [1, 3, 5, 7, 8, 10, 12]
    let day = 30
    for (let i = 0; i < longMouth.length; i++) {
      if (mouth === longMouth[i] && mouth !== 2) {
        day = 31
        break
      } else if (mouth === 2) {
        if (year % 4 === 0) {
          if (year % 100 === 0) {
            if (year % 400 === 0) {
              day = 29
            } else {
              day = 28
            }
          } else {
            day = 29
          }
        } else {
          day = 28
        }
      }
    }
    let num = getWeek(year, mouth)
    let dayArr = []
    let len = day + num
    for (let i = 0, j = 1; i < len; i++) {
      if (num !==0) {
        dayArr[i] = ' '
        num--
      } else {
        dayArr[i] = j
        j++
      }
    }

    for (let i = 0; i * 7 < dayArr.length; i++) {
      if (year !== dYear || mouth !== dMouth) {
        dDay = -1
      }
      getTr(dayArr, i * 7, table, dDay)
    }
    let midId = document.getElementById('content-mid')
    midId.appendChild(table)
  }
}

// 计算当月1号是周几
// function getD (date, day) {
//   let result = day - (date % 7 - 1)
//   let re = result < 0 ? 7 + result : result
//   re === 7 ? re = 0 : re
//   return re
// }

// 计算某年某月1日为星期几
function getWeek (year, mouth, day = 1) {
  let result
  let date = new Date()
  let eWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  for (let i = 0; i < eWeek.length; i++) {
    if (eWeek[i] === date.toString(date.setFullYear(year, mouth - 1, day)).split(' ')[0]) {
      result = i
    }
  }
  return result
}


// 生成表格数据
function getTr (arr, count, table, d) {
  let tr = document.createElement('tr')
  for (let i = count; i < arr.length; i++) {
    let td = document.createElement('td')
    if (d === arr[i]) {
      td.innerHTML = '<span class="today">' + arr[i] + '</span>'
      tr.appendChild(td)
    } else {
        td.innerHTML = "<span>" + arr[i] + "</span>"
        tr.appendChild(td)
      }
    if ((i + 1) % 7 === 0) {
      break
    }
  }
  table.appendChild(tr)
}
