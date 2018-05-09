const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var width = canvas.width
var height = canvas.height

var lPaddleHeight = 80
var rPaddleHeight = 80

var lpy = canvas.height / 2 - lPaddleHeight / 2
var rpy = canvas.height / 2 - rPaddleHeight / 2

var keyCode

var leftPaddleDownPressed = false
var leftPaddleUpPressed = false
var rightPaddleDownPressed = false
var rightPaddleUpPressed = false

function drawLeftPaddle(ly) {
  context.fillStyle = '#fff'
  context.fillRect(10, ly, 10, lPaddleHeight)
}

function drawRightPaddle(ry) {
  context.fillStyle = '#fff'
  context.fillRect(canvas.width-20, ry, 10, rPaddleHeight)
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(event) {
  if (event.keyCode == 65) {
    leftPaddleDownPressed = true
  }
  else if (event.keyCode == 81) {
    leftPaddleUpPressed = true
  }
  if (event.keyCode == 76) {
    rightPaddleDownPressed = true
  }
  else if (event.keyCode == 80) {
    rightPaddleUpPressed = true
  }
}

function keyUpHandler(event) {
  if (event.keyCode == 65) {
    leftPaddleDownPressed = false
  }
  else if (event.keyCode == 81) {
    leftPaddleUpPressed = false
  }
  if (event.keyCode == 76) {
    rightPaddleDownPressed = false
  }
  else if (event.keyCode == 80) {
    rightPaddleUpPressed = false
  }
}

function moveLeftPlayerUp(speed) {
  if (lpy + lPaddleHeight >= height) {
    lpy = height - lPaddleHeight
  }
  if (lpy <= 0) {
    lpy = 0
  }

  lpy -= speed
  drawLeftPaddle(lpy)
}

function moveLeftPlayerDown(speed) {
  if (lpy + lPaddleHeight >= height) {
    lpy = height - lPaddleHeight
  }
  if (lpy <= 0) {
    lpy = 0
  }

  lpy += speed
  drawLeftPaddle(lpy)
}

function moveRightPlayerUp(speed) {
  if (rpy + rPaddleHeight >= height) {
    rpy = height - rPaddleHeight
  }
  if (rpy <= 0) {
    rpy = 0
  }

  rpy -= speed
  drawRightPaddle(rpy)
}

function moveRightPlayerDown(speed) {
  if (rpy + rPaddleHeight >= height) {
    rpy = height - rPaddleHeight
  }
  if (rpy <= 0) {
    rpy = 0
  }

  rpy += speed
  drawRightPaddle(rpy)
}

function init() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height)

  drawRightPaddle(rpy);
  drawLeftPaddle(lpy);
}