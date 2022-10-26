function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background(125);
  rotateX(mouseX);
  rotateY(mouseY);
  frameRate(10);
  fill(185,156,107);
  box(500);
}
