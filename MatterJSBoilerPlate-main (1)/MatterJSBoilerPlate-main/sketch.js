
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let wall;
let ball, parede_e, parede_d,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	let ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	};
	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

	let ground_options={
		isStatic: true
	};
	ground = Bodies.rectangle(400,600,800,20,ground_options);
	World.add(world,ground);
	
	parede_e = Bodies.rectangle(600,500,20,100,ground_options);
	World.add(world,parede_e);
	parede_d = Bodies.rectangle(800,500,20,100,ground_options);
	World.add(world,parede_d);
	wall = Bodies.rectangle(800,300,10,700,ground_options);
	World.add(world,wall);

	Engine.run(engine);
	
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
	ellipse(ball.position.x,ball.position.y,20);
	rect(ground.position.x,ground.position.y,800,20);
	rect(parede_d.position.x,ground.position.y,20,100);
	rect(parede_e.position.x,ground.position.y,20,100);
	rect(wall.position.x,wall.position.y,10,600);

	keyPressed()
  	drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:-1});
		
	}

}

