
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var log;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	log = new log(150,305,300,170);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
   log.display();







  
  drawSprites();
 
}



