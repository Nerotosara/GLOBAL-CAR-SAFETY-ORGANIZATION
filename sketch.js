var car,wall;
var speed,weight;
function setup(){
 createCanvas(1600,400);  
 car=createSprite(50,200,40,20);
 wall=createSprite(1200,200,60,height/2);
 car.shapeColor='blue';
 wall.shapeColor='red'; 
 speed=random(55,90);
 weight=random(400,1500);
 car.velocityX=speed;
 
}
function draw(){
background(0);
textSize(28);
 fill ('blue');
 text ('GLOBAL CAR SAFETY ORGANIZATION',400,50);

if(wall.x-car.x<car.width/2+wall.width/2){
car.velocityX=0;
var deformation;
deformation=0.5*weight*speed*speed/22500;
if(deformation<100){
    car.shapeColor='green';
    wall.shapeColor='white';
    textSize(25);
    fill ('green')
    text('less damage Rateing=A-'+'Torus',100,100);

}
if(deformation<180 && deformation>100){
    car.shapeColor='yellow';
    wall.shapeColor='blue';
    textSize(25);
    fill ('yellow')
    text('Average damage Rateing=B+'+'Cyclop',100,100);
}
if(deformation>180){
    car.shapeColor='red';
    wall.shapeColor='purple';
    textSize(25);
    fill ('red')
    text('most damage Rateing=D-'+'Zenia',100,100);
}
}


drawSprites();
}