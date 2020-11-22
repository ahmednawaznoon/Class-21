var fixedRectangle, movingRectangle
var fixedRectangle1


function setup() {
  createCanvas(800,800);
  
  fixedRectangle = createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor = "green"
  fixedRectangle.debug = true
  fixedRectangle.velocityX = 5

  fixedRectangle1 = createSprite(600, 200, 50, 50);
  fixedRectangle1.shapeColor = "green"
  fixedRectangle1.debug = true
  fixedRectangle1.velocityX = -5

  movingRectangle = createSprite(300,100,50,50)
  movingRectangle.shapeColor = "white"
  movingRectangle.debug = true
}

function draw() {

  
  background(0);  

  movingRectangle.x = mouseX
  movingRectangle.y = mouseY

  if (isCollided(movingRectangle, fixedRectangle) || isCollided(movingRectangle, fixedRectangle1)) {
    movingRectangle.shapeColor = "red"
    fixedRectangle.shapeColor = "blue"
    fixedRectangle1.shapeColor = "blue"
  }else{
    movingRectangle.shapeColor = "white"
    fixedRectangle.shapeColor = "green"
    fixedRectangle1.shapeColor = "green"

  }

  springBack(fixedRectangle, fixedRectangle1)

  
  drawSprites();
}


