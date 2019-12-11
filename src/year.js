function getYearUi (year) {
  let mid = document.getElementById('content-mid')
  mid.innerHTML = ''
  let date = new Date()
  let dYear = date.getFullYear()

  if (!year) {
    year = dYear
  }
  let inp1 = document.getElementById('inp1')
  inp1.value = year + '-' + (year + 11)

  let table = document.createElement('table')
  table.setAttribute("cellspacing", "0")
  table.setAttribute("id", "mTable")
  table.setAttribute("class", "mouth-table")
  table.setAttribute("border", "1")
  let tr = document.createElement('tr')

  // 生成年份
  for (let i = year; i < year + 12; i++) {
    let tr = document.createElement('tr')
    for (let j = i; j < i + 4; j++) {
      let td = document.createElement('td')
      if (dYear === j) {
        td.innerHTML = j
        td.setAttribute("class", 'd-mouth')
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

  // year change
  mTable.addEventListener('click', function () {
    let year = Math.floor(event.srcElement.innerHTML)
    getMouthUi(year)
  })
}
