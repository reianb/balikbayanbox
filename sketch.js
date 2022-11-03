let degreeX = 500;
let degreeY = 500;
let degreeZ = 1;
let isRed = false;
let sound0;
let sound1;
let xVal;
let img;
function preload()
{
  soundFormats('mp3');
  sound0 =loadSound('assets/audio0.mp3');
  sound1 =loadSound('assets/audio1.mp3');
  img = loadImage('assets/cardboard.jpeg');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  describe('a box that is rotatable by interacting with a mouse');
}

function draw() {
  background(125);
  if(frameCount%100==0){
    isRed = !isRed;
  }
  if(isRed){
    background("red");
  }
  else{
    background("blue");
  }
  
  rotateX(degreeX)
  rotateY(degreeY)
  rotateZ(degreeZ)
  if (mouseIsPressed){
    degreeX = -mouseY;
    degreeY = mouseX;
  }
  if(sound0.isPlaying()==false&&mouseX<500){
    sound0.play();
    }
    else if(sound0.isPlaying()&&sound1.isPlaying==false&&mouseX>500){
      sound1.play();
    }
    texture(img);
    box(400);
}