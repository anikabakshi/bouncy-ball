const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground,ball,slope;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options={
        restitution:2,
        friction:5
    }

    ground = Bodies.rectangle(400,790,800,20,ground_options);
    World.add(world,ground);
    slope = Bodies.rectangle(300,600,800,20,ground_options);
    World.add(world,slope);
  
    ball=Bodies.circle(400,100,25,ball_options);
    World.add(world,ball)

    console.log(ground);
}

function draw(){
    background("#ff8300");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    rect(slope.position.x,slope.position.y,800,20);


ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,25,25)

}