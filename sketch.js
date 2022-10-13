const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var tower1,tower2;
var fundo_img;
var cannon;
var cannonBall;
var angle;
var balls=[];


var lista=["carro","bola","game","bicicleta"]
console.log(lista)
console.log(lista[0][1]);
lista.push("fone")
console.log(lista)
lista.pop()
console.log(lista)
lista.splice(2,2,"dog","cat")
console.log(lista)
lista.shift()
lista.unshift("tv")
console.log(lista)


function preload(){
  fundo_img = loadImage("assets/background.gif");
}


function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  tower1 = new Tower(150,350,160,310);
  
  angle=-PI/4;
  cannon= new Cannon(180,110,100,50,angle);
  //cannonBall = new  CannonBall(cannon.x,cannon.y);
  
}

function draw() 
{
  background(51);
  image(fundo_img,0,0,width,height);
  Engine.update(engine);
  
  

  for(var i=0; i < balls.length; i++){
    exibirBalls(balls[i],i);
  }

  cannon.display();
  tower1.show();
  //cannonBall.display();
  


}

function keyReleased(){
  if(keyCode === RIGHT_ARROW){
    balls[balls.length-1].shoot();
  }
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    var cannonBall = new CannonBall(cannon.x,cannon.y);
    balls.push(cannonBall);
  }
}

function exibirBalls(ball,index){
  ball.display();
  if(ball.body.position.x >= width || ball.body.position.y >= height - 50){
    World.remove(world,ball.body);
    balls.splice(index,1);
  }
}