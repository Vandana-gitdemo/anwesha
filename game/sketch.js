

function preload(){
  
 // backgroundImage = loadImage("image/bg1.png");
  boyy = loadImage("images/p1.gif");
  boyy2 = loadImage("images/p2.gif");
  

 
}
function setup() {
  createCanvas(windowWidth,windowHeight); 
  //creating background
  background1 = createSprite(800,250);
 // background1.addImage(backgroundImage);
 player = createSprite(200,200)
 player.addImage("b",boyy2)
 
}

function draw() {
background("white")
  // moving ground
 drawSprites();
 if(keyDown("space"))
 {player.velocityX=3
   player.addImage("b",boyy)
 }
 if(keyWentUp("space"))
 {player.velocityX=3
   player.addImage("b",boyy2)
 }
}
