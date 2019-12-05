function getUi(top, mid, bottom) {
  let date = new Date()
  let dYear = date.getFullYear()
  let dMouth = date.getMonth() +1
  let dDay = date.getDate()
  let dWeek = date.getDay()

  // 生成 年 月
  let inp1 = document.getElementById('inp1')
  inp1.value = dYear + '年' + dMouth + '月'

  let longMouth = [1, 3, 5, 7, 8, 10, 12]
  let week = ['日', '一', '二', '三', '四', '五', '六']
  let day = 30
  // 判断一月是否为31天
  for (let i = 0; i < longMouth.length; i++) {
    if (dMouth === longMouth[i]) {
      day = 31
      break
    }
  }
  // 生成 星期 、天
  let table = document.createElement('table')
  
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
    let num = getD(dDay, dWeek)
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
      let tr = getTr(dayArr, i * 7, table)
    }
    let midId = document.getElementById('content-mid')
    midId.appendChild(table)
  }
}

// 计算当月1号是周几
function getD (date, day) {
  let result = day - (date % 7 - 1)
  let re = result < 0 ? 7 + result : result
  return re
}

function getTr (arr, count, table) {
  let tr = document.createElement('tr')
  for (let i = count; i < arr.length; i++) {
    let td = document.createElement('td')
    td.innerHTML = arr[i]
    tr.appendChild(td)
    if ((i + 1) % 7 === 0) {
      break
    }
  }
  table.appendChild(tr)
}
