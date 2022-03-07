function showTime() {
  let date = new Date()

  let hour = date.getHours()
  if (hour < 10) {
    hour = '0' + hour
  }

  let minute = date.getMinutes()
  if (minute < 10) {
    minute = '0' + minute
  }

  let second = date.getSeconds()
  if (second < 10) {
    second = '0' + second
  }

  document.getElementById('hours').innerHTML = hour
  document.getElementById('minutes').innerHTML = minute
  document.getElementById('seconds').innerHTML = second
}

setInterval('showTime()', 1000)
