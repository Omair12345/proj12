var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var orange,orangeImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX

if(frameCount % 60 === 0){
  var rand =Math.round(random(1,2))
  if (rand === 1){
    createApple()
  }
  if (rand === 2){
    createOrange()
  }

}













  drawSprites();
}
function createApple(){
apple=createSprite(50,40,10,10)
apple.x=Math.round(random(50,350))
apple.addImage(appleImg)
apple.scale=0.07
apple.velocityY=3
apple.lifetime=150
}

function createOrange(){
  orange=createSprite(50,40,10,10)
  orange.x=Math.round(random(50,350))
  orange.addImage(orangeImg)
  orange.scale=0.07
  orange.velocityY=3
  orange.lifetime=150
  }