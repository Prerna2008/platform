
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bob1,bob2,bob3,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var platform;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
  world = engine.world;
  

  platform = new Ground(400,200, 300, 50);
  bob1 = new Bob(300,500,50); 
	bob2 = new Bob(350,500,50);
	bob3 = new Bob(400,500,50);
	bob4 = new Bob(450,500,50); 
  bob5 = new Bob(500,500,50); 
  var options1={
    bodyA:bob1.body,
    bodyB:platform.body,
    stiffness:0.04,
    length:200
  }
  rope1=Constraint.create(options1);
  World.add(world,rope1);
  var options2={
    bodyA:bob2.body,
    bodyB:platform.body,
    stiffness:0.04,
    length:200
  }
  rope2=Constraint.create(options2);
  World.add(world,rope2);
  var options3={
    bodyA:bob3.body,
    bodyB:platform.body,
    stiffness:0.04,
    length:200
  }
  rope3=Constraint.create(options3);
  World.add(world,rope3);
  var options4={
    bodyA:bob4.body,
    bodyB:platform.body,
    stiffness:0.04,
    length:200
  }
  rope4=Constraint.create(options4);
  World.add(world,rope4);
  var options5={
    bodyA:bob5.body,
    bodyB:platform.body,
    stiffness:0.04,
    length:200
  }
  rope5=Constraint.create(options5);
  World.add(world,rope5);
}

function draw() {
  background("white");
  Engine.update(engine);
  
  keyPressed();
  platform.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  strokeWeight(4)
  line1(bob1.body.position.x,bob1.body.position.y,platform.body.position.x,platform.body.position.y);
  line2(bob2.body.position.x,bob2.body.position.y,platform.body.position.x,platform.body.position.y);
  line2(bob3.body.position.x,bob3.body.position.y,platform.body.position.x,platform.body.position.y);
  line3(bob4.body.position.x,bob4.body.position.y,platform.body.position.x,platform.body.position.y);
  line5(bob5.body.position.x,bob5.body.position.y,platform.body.position.x,platform.body.position.y);
}

function keyPressed(){
  if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-4,y:3})
}
if(keyCode===DOWN_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:0,y:0})
}
}

