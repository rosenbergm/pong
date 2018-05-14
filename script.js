function draw() {
  init()

  if (leftPaddleDownPressed) {
    moveLeftPlayerDown(5);
  }
  if (leftPaddleUpPressed) {
    moveLeftPlayerUp(5);
  }
  if (rightPaddleDownPressed) {
    moveRightPlayerDown(5);
  }
  if (rightPaddleUpPressed) {
    moveRightPlayerUp(5);
  }

  if(ballX + directionX > screenWidth - ballRadius) {
    if (isBallOnRightPaddle()) {
      changeBallXDirection()
    }
    else {
      centerBall()
      leftScore++
    }
  }
  else if (ballX + directionX < ballRadius) {
    if (isBallOnLeftPaddle()) {
      changeBallXDirection()
    }
    else {
      centerBall()
      rightScore++
    } 
  }

  if(isBallTouchingTopOrBottomSide()) {
    changeBallYDirection()
  }

}
setInterval(draw, 10);