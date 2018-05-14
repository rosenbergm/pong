const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

var screenWidth = canvas.width
var screenHeight = canvas.height

var leftScore = 0
var rightScore = 0
const score = document.getElementById('score')

var leftPaddleHeight = 80
var lPaddleX = 0
var rightPaddleHeight = 80
var rPaddleX = screenWidth-10

var paddleWidth = 10

var ballRadius = 10
var ballX = screenWidth / 2
var ballY = screenHeight / 2
var directionX = 2
var directionY = -2

var leftPaddleY = screenHeight / 2 - leftPaddleHeight / 2
var rightPaddleY = screenHeight / 2 - rightPaddleHeight / 2

var leftPaddleDownPressed = false
var leftPaddleUpPressed = false
var rightPaddleDownPressed = false
var rightPaddleUpPressed = false

function drawLeftPaddle(ly) {
  context.fillStyle = '#fff'
  context.fillRect(lPaddleX, ly, paddleWidth, leftPaddleHeight)
}

function drawRightPaddle(ry) {
  context.fillStyle = '#fff'
  context.fillRect(rPaddleX, ry, paddleWidth, rightPaddleHeight)
}

function bounceOfPlayers() {
  directionX = -directionX;
}
function bounceOffTopOrBotton() {
  directionY = -directionY;
}

function isBallOnLeftPaddle() {
  if (ballY > leftPaddleY && ballY < leftPaddleY + leftPaddleHeight) {
    return true
  }
  else {
    return false
  }
}
function isBallOnRightPaddle() {
  if (ballY > rightPaddleY && ballY < rightPaddleY + rightPaddleHeight) {
    return true
  }
  else {
    return false
  }
}
function isBallTouchingTopOrBottomSide() {
  if (ballY + directionY > screenHeight - ballRadius || ballY + directionY < ballRadius) {
    return true
  }
  else {
    return false
  }
}
function isInLeftPaddleArea() {
  if (ballX + directionX > screenWidth - ballRadius) {
    return true
  }
  else {
    return false
  }
}
function isInRightPaddleArea() {
  if (ballX + directionX < ballRadius) {
    return true
  }
  else {
    return false
  }
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
  if (leftPaddleY + leftPaddleHeight >= screenHeight) {
    leftPaddleY = screenHeight - leftPaddleHeight
  }
  if (leftPaddleY <= 0) {
    leftPaddleY = 0
  }

  leftPaddleY -= speed
  drawLeftPaddle(leftPaddleY)
}

function moveLeftPlayerDown(speed) {
  if (leftPaddleY + leftPaddleHeight >= screenHeight) {
    leftPaddleY = screenHeight - leftPaddleHeight
  }
  if (leftPaddleY <= 0) {
    leftPaddleY = 0
  }

  leftPaddleY += speed
  drawLeftPaddle(leftPaddleY)
}

function moveRightPlayerUp(speed) {
  if (rightPaddleY + rightPaddleHeight >= screenHeight) {
    rightPaddleY = screenHeight - rightPaddleHeight
  }
  if (rightPaddleY <= 0) {
    rightPaddleY = 0
  }

  rightPaddleY -= speed
  drawRightPaddle(rightPaddleY)
}

function moveRightPlayerDown(speed) {
  if (rightPaddleY + rightPaddleHeight >= screenHeight) {
    rightPaddleY = screenHeight - rightPaddleHeight
  }
  if (rightPaddleY <= 0) {
    rightPaddleY = 0
  }

  rightPaddleY += speed
  drawRightPaddle(rightPaddleY)
}

function centerBall() {
  ballX = screenWidth / 2
  ballY = screenHeight / 2
}

function drawBall() {
  context.beginPath();
  context.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  context.fillStyle = "#FFF";
  context.fill();
  context.closePath();

  /*if(ballX + directionX > screenWidth - ballRadius) {
    if (ballY > rightPaddleY && ballY < rightPaddleY + rightPaddleHeight) {
      console.log('SPPS')
      directionX = -directionX;
    }
    else {
      console.log('GAME OVER RIGHT!')
      centerBall()
      leftScore++
    }
  }
  else if (ballX + directionX < ballRadius) {
    if (ballY > leftPaddleY && ballY < leftPaddleY + leftPaddleHeight) {
      directionX = -directionX;
    }
    else {
      console.log('GAME OVER LEFT!')
      centerBall()
      rightScore++
    } 
  }

  if(ballY + directionY > screenHeight - ballRadius || ballY + directionY < ballRadius) {
    directionY = -directionY;
  }*/

  ballX += directionX;
  ballY += directionY;
}

function init() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#000';
  context.fillRect(0, 0, canvas.width, canvas.height)

  drawRightPaddle(rightPaddleY);
  drawLeftPaddle(leftPaddleY);
  drawBall();

  score.innerHTML = leftScore + " : " + rightScore;
}