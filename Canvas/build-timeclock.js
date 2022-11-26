    var clock = document.getElementById("timer")
    var conText = clock.getContext("2d")
    var radius = clock.height / 2
    conText.translate(radius, radius)
    radius = radius * 0.85
    setInterval(createClock, 1000)

    function createClock() {
      createClockSurface(conText, radius)
      createClockNumbers(conText, radius)
      createClockTime(conText, radius)
    }

    function createClockSurface(conText, radius) {
      var grad
      conText.beginPath()
      conText.arc(0, 0, radius, 0, 2 * Math.PI)
      conText.fillStyle = "sienna"
      conText.fill()
      grad = conText.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.01)
      grad.addColorStop(0, '#cccaaa')
      grad.addColorStop(1, 'crimson')
      grad.addColorStop(0, '#ffffff')
      conText.strokeStyle = grad
      conText.lineWidth = radius * 0.53
      conText.stroke()
      conText.beginPath()
      conText.arc(0, 0, radius * 0.09, 0, 2 * Math.PI)
      conText.fillStyle = '#000000'
      conText.fill()
    }

    function createClockNumbers(conText, radius) {
      var ang
      var num
      conText.font = radius * 0.16 + "px arial"
      conText.textBaseline = "middle"
      conText.textAlign = "center"
      for (num = 1; num < 13; num++) {
        ang = num * Math.PI / 6
        conText.rotate(ang)
        conText.translate(0, -radius * 0.85)
        conText.rotate(-ang)
        conText.fillText(num.toString(), 0, 0)
        conText.rotate(ang)
        conText.translate(0, radius * 0.85)
        conText.rotate(-ang)
      }
    }

    function createClockTime(conText, radius) {
      var now = new Date()
      var hour = now.getHours()
      console.log(hour)
      var minute = now.getMinutes()
      var second = now.getSeconds()
      hour = hour % 12
      hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60))
      createClockHand(conText, hour, radius * 0.50, radius * 0.05)
      minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60))
      createClockHand(conText, minute, radius * 0.68, radius * 0.05)
      second = (second * Math.PI / 30)
      createClockHand(conText, second, radius * 0.8, radius * 0.02)
    }

    function createClockHand(conText, pos, length, width) {
      conText.beginPath()
      conText.lineWidth = width
      conText.lineCap = "round"
      conText.moveTo(0, 0)
      conText.rotate(pos)
      conText.lineTo(0, -length)
      conText.stroke()
      conText.rotate(-pos)
    }
