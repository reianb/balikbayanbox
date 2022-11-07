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
  for(let i = 0; i<=6;i++){
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
  if(sound[0].isPlaying()==false&&sound[6].isPlaying()==false&&mouseX<1000&&mouseY<1000){
    sound[0].play();
    sound[6].play();
    }
    
  if(sound[1].isPlaying()==false&&mouseX>1000&&mouseY<1000){
      sound[1].play();

    } 
  if(sound[2].isPlaying()==false&&mouseX<1000&&mouseY>1000){
    sound[2].play();
  }
  if(sound[3].isPlaying()==false&&sound[6].isPlaying()==false&&mouseX>1000&&mouseY>1000){
    sound[3].play();
  }
  if(sound[4].isPlaying()==false&&mouseX<1000&&mouseX>1000){
    sound[4].play();
  }
  if(sound[5].isPlaying()==false&&mouseX<800&&mouseY<1000){
    sound[5].play();
  }
    texture(img);
    box(400);
}