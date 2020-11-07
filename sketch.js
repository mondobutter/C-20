var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400,100,70,50);
  fixedRect = createSprite(200,100,50,70);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  console.log(movingRect.x - fixedRect.x);
  if(movingRect.x - fixedRect.x < fixedRect.width / 2 + movingRect.width / 2
    && fixedRect.x - movingRect.x < fixedRect.width / 2 + movingRect.width / 2
    && fixedRect.y - movingRect.y < fixedRect.height / 2 + movingRect.height / 2
    && movingRect.y - fixedRect.y < movingRect.height / 2 + movingRect.height / 2
    ){
    movingRect.shapeColor = "lime";
    fixedRect.shapeColor = "lime";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  drawSprites();
}