var  thor , loki , equipment;
var thorImage , lokiImage,  hammerImage , shieldImage ,  gaunletImage , hulkImage ;
var toolsG , lokiG ;
var gameState = PLAY;
var PLAY;
var END;
var score = 0;


function preload(){
  thorImage = loadImage("thorshammer.jpg");
  hammerImage = loadImage("hammer.png");
  shieldImage = loadImage("shield.png");
  gaunletImage = loadImage("gaunlet.jpg");
  hulkImage = loadImage("hulk.png");
  lokiImage = loadImage("4-2-loki-free-download-png-thumb.png");
  
  
}

function setup() {
  createCanvas(700, 600);
  
 thor = createSprite(100,200);
 thor.addImage(thorImage);
 thor.scale = 0.6;
 thor.debug = true;
  

 

 toolsG = createGroup();
 lokiG = createGroup();

  
}

function draw() {
  background("white");
  
  if(gameState===PLAY){
    
    tool();
  
    thor.y = mouseY;
    thor.x = mouseX;
  
    if(thor.isTouching(toolsG)){
     score = score+2;
     toolsG.destroyEach();
  }
    
    if(thor.isTouching(lokiG)){
       score = score-2;
       toolsG.destroyEach();
       gameState = END;
       }
    
    if(frameCount%200===0){
     loki = createSprite(700,Math.round(random(100,500)));
     loki.addImage(lokiImage);
     loki.velocityX = -20;
     loki.debug = true;
     loki.scale = 0.7;
      
     lokiG.add(loki);
      
  }
    
  }
  
  drawSprites(); 
  
   if(gameState ===END){
     background = "red";
     text("Press Space key to RESTART ",200,200);
     if(keyDown("space")){
       gameState = PLAY; 
       
     }
     }
  
  textSize(20);
  text("SCORE :"+ score,570,70);
  
  }


function tool(){
if(frameCount%20===0){
  var equipment = createSprite(700,Math.round(random(50,550)));
  equipment.velocityX = -(20+score-10);
  
  var rand = Math.round(random(1,4));
  switch(rand){
    
    case 1: equipment.addImage(hammerImage);
            equipment.scale = 0.5;
            break;
    case 2: equipment.addImage(shieldImage);
            equipment.scale = 0.08;
            break;
    case 3: equipment.addImage(gaunletImage);
            equipment.scale = 0.5;
            break;
    case 4: equipment.addImage(hulkImage);
            equipment.scale = 0.08;
            break;
      
  }
    
  toolsG.add(equipment);
  equipment.lifetime = 300;
  
  equipment.depth = thor.depth;
  thor.depth = thor.depth+1;
  
}

}




