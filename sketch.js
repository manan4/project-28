
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;
var tree;
var mango1,mango2,mango3,mango4,mango5,
	mango6,mango7,mango8,mango9,mango10,
	mango11,mango12;
var boy;
var stone;
var slingShot;

function preload()
{
	backgroundImg = loadImage("sprites/bg.png");	
}

function setup() {
	createCanvas(1500, 730);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree = new Tree(1100,370,700,750);
boy = new Boy(200,600,250,400);
stone = new Stone(130,500,50,50);
mango1 = new Mango(1000,330,60,60);
mango2 = new Mango(920,320,60,60);
mango3 = new Mango(1020,250,60,70);
mango4 = new Mango(1350,300,50,60);
mango5 = new Mango(1100,350,45,50);
mango6 = new Mango(950,100,60,70);
mango7 = new Mango(1080,100,50,65);
mango8 = new Mango(1190,400,60,70);
mango9 = new Mango(1180,240,60,70);
mango10 = new Mango(1300,200,60,70);
mango11 = new Mango(920,225,50,60);
mango12 = new Mango(900,230,60,75);
slingshot = new Slingshot(stone.body,boy.body); 
	Engine.run(engine);
  
}


function draw() {
  
  background(backgroundImg);
  Engine.update(engine);
  strokeWeight(4);

  drawSprites();

 /*detectollision(stoneabject,mango1);
 detectollision(stoneabject,mango2);
 detectollision(stoneabject,mango3);
 detectollision(stoneabject,mango4);
 detectollision(stoneabject,mango5);
 detectollision(stoneabject,mango6);
 detectollision(stoneabject,mango7);
 detectollision(stoneabject,mango8);
 detectollision(stoneabject,mango9);
 detectollision(stoneabject,mango10);
 detectollision(stoneabject,mango11);
 detectollision(stoneabject,mango12);*/

 


 tree.display();
 boy.display();
 stone.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango9.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango5.display();
 mango10.display();
 mango12.display();
 mango11.display();
 slingshot.display();

}

/*function KeyPressed(){
	if (KeyCode === 32){
Matter.Body.setPosition(stoneObject.body,{x:235, y:420})
launcherObject.attach(stoneobject.body);
	}
}*/



function mouseDragged(){
	Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
	SlingShot.fly();
}	
