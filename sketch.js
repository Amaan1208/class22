const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world,ball, ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create(); 
  world = engine.world; 

  var options ={ 
    isStatic:true 
  } 
  
 ground= Bodies.rectangle(400,390,800,20,options);
   World.add(world,ground);

   var ball_options ={ 
    restitution:1.0
  } 
  
 ball= Bodies.circle(400,100,50,ball_options);
   World.add(world,ball);
}

function draw() {
  background(0);  

  Engine.update(engine); 
  rectMode(CENTER); 
  fill("brown")
  rect(ground.position.x,ground.position.y,800,20);

 ellipseMode(RADIUS); 
  fill("lightBlue")
  ellipse(ball.position.x,ball.position.y,50,50);

  drawSprites();
}