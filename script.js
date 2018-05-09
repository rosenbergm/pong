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


}
setInterval(draw, 10);