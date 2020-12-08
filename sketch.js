
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var background, backgroundImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg");
 
}



function setup() {
  createCanvas(600, 400)
  back=createSprite(0,0,600,400)
  back.addImage(backgroundImage);  
  back.scale=1.5
  back.velocityX= -4
  back.x=back.width/2 
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("Running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  
  

  
}


function draw() {
background("white");
  
      
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(back.x<100){
    back.x=back.width/2
  }
   if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
    monkey.collide(ground);
  
  //if(obstacleGroup.isTouching(monkey){
     
    // }
  
    spawnObstacles();
    spawnBananas();
  
  drawSprites();
}


function spawnObstacles(){
  if(frameCount%120===0){
    obstacle=createSprite(600, 300, 50, 50)
  obstacle.addImage(obstacleImage);
    obstacle.scale=0.2
    obstacle.velocityX= -4
    
    obstacle.lifetime=120
  }
}

function spawnBananas(){
  if(frameCount%120===0){
    banana=createSprite(600, 100, 50, 50)
  banana.addImage(bananaImage);
    banana.scale=0.2
    banana.velocityX= -4
    
    banana.lifetime=120
}
}

