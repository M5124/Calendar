function getMouthUi(year) {
  let mid = document.getElementById('content-mid')
  mid.innerHTML = ''
  let date = new Date()
  let dMouth = date.getMonth() +1
  let dYear = date.getFullYear()

  let inp1 = document.getElementById('inp1')
  inp1.value = year + '年'

  let table = document.createElement('table')
  table.setAttribute("cellspacing", "0")
  table.setAttribute("id", "mTable")
  table.setAttribute("class", "mouth-table")
  table.setAttribute("border", "1")
  let tr = document.createElement('tr')

  // 生成月份
  for (let i = 1; i < 12; i++) {
    let tr = document.createElement('tr')
    for (let j = i; j < i + 4; j++) {
      let td = document.createElement('td')
      if (dMouth === j) {
        td.innerHTML = j
        if (dYear === year) {
          td.setAttribute("class", 'd-mouth')
        }
        tr.appendChild(td)
      } else {
        td.innerHTML = j
        tr.appendChild(td)
      }
    }
    table.appendChild(tr)
    i += 3
  }
  mid.appendChild(table)

   // mouth change
   let mTable = document.getElementById('mTable')
   //let inp1 = document.getElementById('inp1')
   mTable.addEventListener('click', function () {
     //let year = Math.floor(inp1.value.replace('年', ''))
     let mouth = Math.floor(event.srcElement.innerHTML)
     getDayUi(year, mouth)
     
   })
}
