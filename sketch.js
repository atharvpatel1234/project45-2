function preload(){
  bgimage = loadImage("pad_screenshot.png");
  jake1image = loadImage("Jake1.webp");
  jake2image = loadImage("images.jpg");
  trackimage = loadImage("track.jpg");
  coinimage = loadImage("coin image.png");
  bg1image = loadImage("bg1.png");

 coinsound = loadSound("coin.wav");
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bg.addImage(trackimage)
  bg.velocityY = 5;

  jake = createSprite(displayWidth/2,displayHeight-80,50,50)
  jake.addImage(jake1image)
  jake.scale = 0.7;

  coinGroup = new Group();

  edges = createEdgeSprites()
}


function draw() {
  background(bg1image);  
  drawSprites();
  if(keyDown(RIGHT_ARROW)){
    jake.x = jake.x+14;
  }
  if(keyDown(LEFT_ARROW)){
    jake.x = jake.x-14;
  }
  if(bg.y>displayHeight/2){
    bg.y = 200
  }
  spawnCoin();

  if(jake.isTouching(coinGroup)){
    coinGroup[0].destroy();
    coinsound.play();
  }
  jake.collide(edges[0]);
  jake.collide(edges[1]);
}

function spawnCoin(){
 //write code here to spawn the clouds
    if (frameCount % 60 === 0) {
      var coin = createSprite(600,120,40,40);
      coin.x = Math.round(random(displayWidth/2-200,displayWidth/2+300));
      coin.addImage(coinimage);
      coin.scale = 0.2;
      coin.velocityY = 5;
      
       //assign lifetime to the variable
      coin.lifetime = 200;
      
      //adjust the depth
      coin.depth =jake.depth+1;
      
      //add each cloud to the group
      coinGroup.add(coin);
      
      
    }
}