
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,height-30,width,20);
	paper1= new Paper(100,100);
	dustbin1=new Dustbin(510,height-75,130,100);
	dustbin2 = new Dustbin(470,height-75,10,97);
	dustbin3 = new Dustbin(550,height-75,10,97);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:12,y:-12});
	}
}

