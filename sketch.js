const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img, imagePath, angrybirdBG;
function preload(){
  timezone();
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  slingShot = new Slingshot(ball,{x:100,y:200});

 stand1 = new Stand(390,300,250,10);

 block1 = new Block(330,275,30,40);
 block2 = new Block(360,275,30,40);
 block3 = new Block(390,275,30,40);
 block4 = new Block(420,275,30,40);
 block5 = new Block(450,275,30,40);

 block6 = new Block(360,195,30,40);
 block7 = new Block(390,195,30,40);
 block8 = new Block(420,195,30,40);

 block9 = new Block(390,155,30,40);
}
function draw() {
  if(angrybirdBG){
    background(angrybirdBG);
} 
  ellipse(ball.position.x,ball.position.y,40,40);
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  fill("pink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  fill("lightblue");
  block6.display();
  block7.display();
  block8.display();

  fill("lightyellow");
  block9.display();
  
  fill("black");
  stand1.display();

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

async function timezone(){
  var sky = await fetch("http://worldtimeapi.org/api/timezone/Europe/London");
  var result = await sky.json();
  console.log(result);
  var date = result.datetime;
  console.log(date);
  var time = date.slice(11,13);
  console.log(time);                

  if(time >= 06 && time <= 19){
      imagePath = "bg.png"
  }
else{
  imagePath = "bg2.jpg"
}
angrybirdBG = loadImage(imagePath);
} 