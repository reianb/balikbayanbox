let degreeX = 500;
let degreeY = 500;
let degreeZ = 1;
let isRed = false;
let sound = [];
let img;
function preload()
{
  soundFormats('mp3');
  img = loadImage('assets/cardboard.jpeg');
  for(let i = 0; i<=5;i++){
    sound[i] = loadSound("assets/audio"+i+".mp3");
  }
  
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  describe('a box that is rotatable by interacting with a mouse');
}

function draw() {
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
  if(sound[0].isPlaying()==false&&sound[4].isPlaying==false&&mouseX<500&&mouseY<300){
    sound[0].play();
    sound[4].play();
    }
    
  if(sound[1].isPlaying()==false&&mouseX>500&&mouseY<300){
      sound[1].play();
    }
  if(sound[2].isPlaying()==false&&mouseX<500&&mouseY>300){
    sound[2].play();
  }
  if(sound[3].isPlaying()==false&&mouseX>500&&mouseY>300){
    sound[3].play();
  }

    texture(img);
    box(400);
}