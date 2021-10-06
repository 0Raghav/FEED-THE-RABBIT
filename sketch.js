var garden,rabbit;
var gardenImg,rabbitImg;
var fruit,fruitImage,fruitGroup;
var leaves,leavesImage,leavesImage1,leavesGroup;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  fruitImage=loadImage("apple.png");
  leavesImage=loadImage("leaf.png");
  leavesImage1=loadImage("orangeLeaf.png");
}


function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
fruitGroup=createGroup();
leavesGroup=createGroup();
}


function draw() {
  background(0);
  rabbit.x=mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnFruits();
  spawnLeaves();
  drawSprites();
}
function spawnFruits() {
  //write code here to spawn the fruits
  if (frameCount % 60 === 0) {
    var fruit = createSprite(0,-10,40,10);
    fruit.x = Math.round(random(50,350));
    fruit.addImage(fruitImage);
    fruit.scale = 0.08;
    fruit.velocityY = 6;
    
     //assign lifetime to the variable
    fruit.lifetime = 200;
    
    //adjust the depth
    fruit.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
    
    //add each cloud to the group
    fruitGroup.add(fruit);
  }
}
function spawnLeaves() {
  //write code here to spawn the leaves
  if (frameCount % 60 === 0) {
    var leaves = createSprite(0,-10,40,10);
    leaves.x = Math.round(random(50,350));
    var r=Math.round(random(1,2));
    switch(r){
      case 1:leaves.addImage(leavesImage);
      break;
    case 2:leaves.addImage(leavesImage1);
    break;
    default:break;
    }
  
    leaves.scale = 0.08;
    leaves.velocityY = 6;
    
     //assign lifetime to the variable
    leaves.lifetime = 200;
    
    //adjust the depth
    leaves.depth = rabbit.depth;
    rabbit.depth = rabbit.depth + 1;
    
    //add each cloud to the group
    leavesGroup.add(leaves);
  }
}