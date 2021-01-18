
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage =loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);
  
  monkey =  createSprite(50, 310, 20, 50);
  monkey.addAnimation("running", monkey_running);  
  monkey.scale = 0.15;
  
  ground= createSprite(200, 350, 400, 18);
  ground.velocityX = -3
  
}


function draw() {
  background("white");
  
  score();
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
}
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  if(ground.x<0){
    ground.x = ground.width / 2;
  }
  
  food();
  obstacles();
  
  
 
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -3
    banana.lifetime = 200;
     
  }
}

function obstacles(){
  if(frameCount%300=== 0){
    obstacle=createSprite(400,301,20,50);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.25;
    obstacle.lifetime = 100;
  }
}

function score(){
  var survivalTime=0;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, 100, 50);
}


