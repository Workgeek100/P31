var food;
var group = [];
var snake;
var gameState = "play";
var score= 0
var edges;

function setup(){
snake = createSprite(200,200,10,10);
snake.velocityX = 2
group.push(snake)

food = createSprite(random(30,100),random(30,100),20,20);
food.shapeColor = "yellow"

}

function draw(){
background("black");
edges = createEdgeSprites();

if(gameState === "play"){
    CheckTouch();
    move()
if(score === 1){
snake.height = snake.height+1
}
if(score === 3){
snake.height = snake.height+1.1
        
}
if(score === 6){
snake.height = snake.height+1.4               
}
}

if(gameState === "end"){
background("brown");
textSize(40)
text("GAME OVER",80,200);
snake.destroy()
group = []
food.destroy()

}
    
fill("green")
textSize(25)
text("Score : " + score,10,30)

drawSprites();
}

function move(){
if(keyDown("UP_ARROW")){
snake.setSpeedAndDirection(4,-90)
}
    
if(keyDown("Down_ARROW")){
snake.setSpeedAndDirection(4,90)
}
    
if(keyDown("LEFT_ARROW")){
snake.setSpeedAndDirection(4,180)
}
    
if(keyDown("RIGHT_ARROW")){
snake.setSpeedAndDirection(4,0)
}
}

function CheckTouch(){
if(snake.isTouching(food)){

food.x= Math.round((random(20,350)));
food.y= Math.round((random(20,350)));

var body = createSprite(200,200,10,10)
group.push(body)
score ++

}

if(edges[0].isTouching(snake) || edges[1].isTouching(snake) || edges[2].isTouching(snake) || edges[3].isTouching(snake)){
gameState = "end"
snake.setSpeedAndDirection(0,0)
}

for(var i = group.length-1 ; i > 0;i--){
    group[i].x = group[i-1].x;
    group[i].y = group[i-1].y
}

}
