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
  for(let i = 0; i<=12;i++){
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
  noStroke();
}

function draw() {
  if(mouseX<=785){
    texture(bckgrnd[0]);
    plane(windowWidth, windowHeight);
  } else if(mouseY<=515&&mouseX>785&&mouseX<1000){
    texture(bckgrnd[2]);
    plane(windowWidth, windowHeight);
  }
  else{
    texture(bckgrnd[1]);
    plane(windowWidth, windowHeight);
  }
  
  if(sound[6].isPlaying()==false&&mouseX>=435&&mouseX<=785&&mouseY>=195&&mouseY<=515){
    sound[6].play();
    }
    
  if(sound[0].isPlaying()==false&&sound[7].isPlaying()==false&&mouseX>=786&&mouseX<=1000&&mouseY>=195&&mouseY<=515){
      sound[0].play();
      sound[7].play();

    } 
  if(sound[2].isPlaying()==false&&sound[9].isPlaying()==false&&mouseX>=1000&&mouseY>1000){
    sound[2].play();
    sound[9].play();
  }
  if(sound[3].isPlaying()==false&&sound[6].isPlaying()==false&&mouseX>=435&&mouseX<=785&&mouseY>=516&&mouseY<=820){
    sound[3].play();
    sound[6].play();
  }
  if(sound[4].isPlaying()==false&&sound[8].isPlaying()==false&&mouseX>=785&&mouseX<=1000&&mouseY>=516&&mouseY<=820){
    sound[4].play();
    sound[8].play();
  }
  if(sound[5].isPlaying()==false&&sound[11].isPlaying()==false&&mouseX<800&&mouseY<1000){
    sound[5].play();
    sound[11].play();
  }
  if(sound[10].isPlaying()==false&&mouseX>=435&&mouseX<=785&&mouseY>=195&&mouseY<=515){
    sound[10].play();
    }
  rotateX(degreeX)
  rotateY(degreeY)
  rotateZ(degreeZ)
  if (mouseIsPressed){
    degreeX = -mouseY;
    degreeY = mouseX;
  }
    texture(img);
    box(windowWidth/4);
}