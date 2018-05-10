const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var width = canvas.width
var height = canvas.height

var leftScore = 0
var rightScore = 0
const score = document.getElementById('score')

var lPaddleHeight = 80
var lPaddleX = 20
var rPaddleHeight = 80
var rPaddleX = canvas.width-30
var paddleWidth = 10

var bRad = 10
var bx = width / 2
var by = height / 2
var dx = 2
var dy = -2

var lpy = canvas.height / 2 - lPaddleHeight / 2
var rpy = canvas.height / 2 - rPaddleHeight / 2

var leftPaddleDownPressed = false
var leftPaddleUpPressed = false
var rightPaddleDownPressed = false
var rightPaddleUpPressed = false

function drawLeftPaddle(ly) {
  context.fillStyle = '#fff'
  context.fillRect(lPaddleX, ly, paddleWidth, lPaddleHeight)
}

function drawRightPaddle(ry) {
  context.fillStyle = '#fff'
  context.fillRect(rPaddleX, ry, paddleWidth, rPaddleHeight)
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

function drawBall() {
  context.beginPath();
  context.arc(bx, by, bRad, 0, Math.PI*2);
  context.fillStyle = "#FFF";
  context.fill();
  context.closePath();

  if(bx + dx > width-bRad) {
    if (by > rpy && by < rpy + rPaddleHeight && bx >= rPaddleX ) {
      console.log('SPPS')
      dx = -dx;
    }
    else {
      console.log('GAME OVER RIGHT!')
      bx = width / 2
      by = height / 2
      leftScore++
    }
  }
  else if (bx + dx < bRad) {
    if (by > lpy && by < lpy + lPaddleHeight) {
      dx = -dx;
    }
    else {
      console.log('GAME OVER LEFT!')
      bx = width / 2
      by = height / 2
      rightScore++
    } 
  }

  if(by + dy > height-bRad || by + dy < bRad) {
    dy = -dy;
  }

  bx += dx;
  by += dy;
}

function init() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height)

  drawRightPaddle(rpy);
  drawLeftPaddle(lpy);
  drawBall()

  score.innerHTML = leftScore + " : " + rightScore;
}