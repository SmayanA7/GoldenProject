const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;
var camel_line,camel;
var barrior,barrior2;
//point 1
var hole1;
//point 3
var hole2,hole3;
//point 5
var hole4,hole5,hole6;

var score = 0;

var ground,slingShot;

function preload() {
    backgroundImg = loadImage("images/Edit_Carnival_bg.jpg");
    line_image = loadImage("images/Camel_line.png");
    //ball_image = loadImage("images/White_ball1.jpg");
    camel_image = loadImage("images/Camel.png");
    //barrior_img = loadImage("images/Barrior_Camel.jpeg");

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight - 100);
    engine = Engine.create();
    world = engine.world;

    //ground = new Ground();

    hole1 = new Holes(displayWidth/2 - 210,displayHeight/2 + 100,50,50);
    hole2 = new Holes(displayWidth/2 - 320,displayHeight/2 + 65,50,50);
    hole3 = new Holes(displayWidth/2 - 320,displayHeight/2 + 135,50,50);
    hole4 = new Holes(displayWidth/2 - 450,displayHeight/2 + 30,50,50);
    hole5 = new Holes(displayWidth/2 - 450,displayHeight/2 + 170,50,50);
    hole6 = new Holes(displayWidth/2 - 450,displayHeight/2 + 100,50,50);

    //ball = createSprite(displayWidth - 225,displayHeight/2 + 100,40,40);
    ball = Bodies.circle(displayWidth - 225,displayHeight/2 + 100, 20);
    World.add(world,ball); 

    slingShot = new SlingShot(ball,{
        x: 1200 /*displayWidth - 225*/,y: 500 /*displayHeight/2 + 100*/
      });

    camel_line = createSprite(displayWidth/2 + 20,displayHeight/4,displayWidth - 410,10);
    camel_line.addImage(line_image);
    camel_line.scale = 0.133;

    camel = createSprite(displayWidth - 220,displayHeight/4,60,60);
    camel.addImage(camel_image);
    camel.scale = 0.5;


    barrior = new Ground(displayWidth/2,displayHeight/2 - 80,displayWidth - 30,10);
    //barrior = createSprite(displayWidth/2,displayHeight/2 - 80,displayWidth - 30,10);
    barrior2 = new Ground(displayWidth/2,displayHeight/2 + 250,displayWidth,10);
    //barrior2 = createSprite(displayWidth/2,displayHeight/2 + 250,displayWidth,10)

   

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

    hole1.display();
    hole2.display();
    hole3.display();
    hole4.display();
    hole5.display();
    hole6.display();

    //ground.display();

    slingShot.display();

    barrior.display();
    //barrior2.display();

    // if (ball.isTouching(hole1)) {
    //     score = score + 2
    // }

    // detectollision(hole1,ball);

    drawSprites();

    text(score,displayWidth/2 + 300,displayHeight/2);
}

function mouseDragged(){ 
    Matter.Body.setPosition(this.ball,{
        x:mouseX,y:mouseY
    }); 
} 
function mouseReleased(){ 
    slingShot.fly(); 
}


// function detectollision(lstone,lmango){
//     mangoBodyPosition=lmango.body.position
//     console.log(mangoBodyPosition);
//     stoneBodyPosition=lstone.body.position
    
//     var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
//         if(distance<=lmango.r+lstone.w)
//       {
//           Matter.Body.setPosition(lmango.body,lmango.body.position,{
//               x:displayWidth - 225,
//               y:displayHeight/2 + 100
//           });
//           console.log('message');
//       }
  
//     }


// if (keyDown("space") && ball.x === 1141) {
//  ball.velocityX = -5;
//}