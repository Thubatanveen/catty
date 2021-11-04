var cat,house,fish,milk;
var catImg;
var houseImg;
var fishImg;
var milkImg;
var gameState = "play"

function preload(){
catImg = loadAnimation("cat 12.jpg");
milkImg = loadImage("milk.jpg");
fishImg = loadImage("fish.png");
houseImg=loadImage("house.jpg");
}

function setup() {
    createCanvas(600,600);
   house= createSprite(600,300);
   house.addImage("house",houseImg);
    house.velocityX=-3;
    
    
    cat= createSprite(200,360);
    cat.addAnimation("cat",catImg);
    cat.scale=0.3
    

    fish= createSprite(290,360);
    fish.addAnimation("fish",fishImg);
    fish.scale=0.1
   
    
    milk= createSprite(400,380);
    milk.addAnimation("milk",milkImg);
    milk.scale=0.1
    
   milksGroup = new Group();
   fishsGroup = new Group();
}

function draw() {
    background(255);
   
     
     if (gameState === "play") {
      if(house.x <0 ) {
        house.x = 300;
      } 
       if(keyDown("left_arrow")){
           cat.x = cat.x - 3;
          
   
         // write a code to move left when left arrow is pressed
       }
       if(keyDown("right_arrow")){
     
             cat.x =cat.x + 3;
   
         // write a code to move left when right arrow is pressed
         
       }
       if(keyDown("space")){
            cat.velocityY = -10;
    }

    if (fishsGroup.isTouching(cat)){
      fishImg.destroy();
    }
    
    if (milksGroup.isTouching(cat)){
      milksGroup.destroy();
    }
    
    
    
     
if(fishsGroup.isTouching(cat)){
    cat.velocityY = 0;
     }
if(milksGroup.isTouching(cat)){
   cat.velocityY = 0;
      }
drawSprites();
}
function spawnfish()
 {
  //write code here to spawn the fish
  if (frameCount % 240 === 0) {
    var fish = createSprite(200, -50);
    var milk = createSprite(200,10);
   
    //add the random function
    //
    fish.x = Math.round(random(120,400));
    milk.x = milk.x;
    fish.addImage(fishImg);
    milk.addImage(milkImg);
    
   fish.velocityY = 1;
    milk.velocityY = 1;
    
 //assign lifetime for the  fish, milk 

 fish.lifetime = 800;
 milk.lifetime = 800;
 
 //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are milk, fish
 
  milksGroup.add(milk);
fishsGroup.add(fish);

  }
 }
}
