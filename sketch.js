let degreeX = 500;
let degreeY = 500;
let degreeZ = 1;
let sound = [];
let img;
let bckgrnd = [];
function preload()
{
  soundFormats('mp3');
  img = loadImage('assets/cardboard.jpeg');
  for(let i = 0; i<=6;i++){
    sound[i] = loadSound("assets/audio"+i+".mp3");
  }
  for(let i=0; i<=2; i++){
    bckgrnd[i] = loadImage("assets/bckgrnd"+i+".jpeg");
  }
  
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  describe('a cardboard box that is rotatable by interacting with a mouse');
}

function draw() {
  if(mouseX<=785){
    texture(bckgrnd[0]);
    plane(windowWidth, windowHeight);
  } else if(mouseY<=515&&mouseX>785&&mouseX<900){
    texture(bckgrnd[2]);
    plane(windowWidth, windowHeight);
  }
  else{
    texture(bckgrnd[1]);
    plane(windowWidth, windowHeight);
  }
  
  if(sound[0].isPlaying()==false&&sound[6].isPlaying()==false&&mouseX>=435&&mouseX<=785&&mouseY>=195&&mouseY<=515){
    sound[0].play();
    sound[6].play();
    }
    
  if(sound[1].isPlaying()==false&&mouseX>=786&&mouseX<=1000&&mouseY>=195&&mouseY<=515){
      sound[1].play();

    } 
  if(sound[2].isPlaying()==false&&mouseX>=1000&&mouseY>1000){
    sound[2].play();
  }
  if(sound[3].isPlaying()==false&&sound[6].isPlaying()==false&&mouseX>=435&&mouseX<=785&&mouseY>=516&&mouseY<=820){
    sound[3].play();
    sound[6].play();
  }
  if(sound[4].isPlaying()==false&&mouseX>=785&&mouseX<=1000&&mouseY>=516&&mouseY<=820){
    sound[4].play();
  }
  if(sound[5].isPlaying()==false&&mouseX<800&&mouseY<1000){
    sound[5].play();
  }
  rotateX(degreeX)
  rotateY(degreeY)
  rotateZ(degreeZ)
  if (mouseIsPressed){
    degreeX = -mouseY;
    degreeY = mouseX;
  }
    texture(img);
    box(400);
}