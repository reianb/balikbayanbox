let degreeX = 50;
let degreeY = 30;
let degreeZ = 1;
let isRed = false;
let sound;
function preload()
{
  soundFormats('mp3', 'ogg');
  sound =loadSound('assets/audio0.mp3');
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
    if(sound.isPlaying()==false){
    sound.play();
    }
  }
    fill(185,156,107);
    box(400);
}
