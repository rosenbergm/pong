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

  if(isInLeftPaddleArea()) {
    if (isBallOnRightPaddle()) {
      bounceOfPlayers()
    }
    else {
      centerBall()
      leftScore++
    }
  }
  else if (isInRightPaddleArea()) {
    if (isBallOnLeftPaddle()) {
      bounceOfPlayers()
    }
    else {
      centerBall()
      rightScore++
    } 
  }

  if(isBallTouchingTopOrBottomSide()) {
    bounceOffTopOrBottom()
  }

}
setInterval(draw, 10);