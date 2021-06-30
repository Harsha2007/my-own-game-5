var counter1=30
var counter2=30
var counter3=30
var counter4=30
var counter5=30
var score=0
var flag=1
var m=2
var s=5
var gamestate='play'


function preload(){

  bg=loadImage('images/background.PNG')
  tableImage=loadImage('images/table.png')
  bottle1Image=loadImage('images/bottle1.png')
  bottle2Image=loadImage('images/bottle 2.png')
  bottle3Image=loadImage('images/bottle 3.png')
  bottle4Image=loadImage('images/bottle 4.png')
  bottle5Image=loadImage('images/bottle 5.png')
  rifleImage=loadImage('images/rifle.png')
  bulletImage=loadImage('images/bullet.png')
  aimImage=loadImage('images/aim.png')
  bottlebreakingsound=loadSound('sound links/bottlebreaking.mp3')
  gameoverImage=loadImage('images/gameover.jpg')

} 

function setup() {
  createCanvas(displayWidth,displayHeight)
 table= createSprite(700, 300, 50, 50);
 table.addImage(tableImage)
 table.scale=4
 bottle1=createSprite(400,115)
 bottle1.addImage(bottle1Image)
 bottle1.scale=0.4
 bottle1.debug=true
bottle1.setCollider('rectangle',0,0,20,50)

 bottle2=createSprite(550,125)
 bottle2.addImage(bottle2Image)
 bottle2.scale=0.3
 bottle2.setCollider('rectangle',0,0,20,50)

 bottle3=createSprite(700,115)
 bottle3.addImage(bottle3Image)
 bottle3.scale=0.5
 bottle3.setCollider('rectangle',0,0,20,50)

 bottle4=createSprite(850,115)
 bottle4.addImage(bottle4Image)
 bottle4.scale=0.3
 bottle4.setCollider('rectangle',0,0,20,50)


 bottle5=createSprite(1000,125)
 bottle5.addImage(bottle5Image)
 bottle5.scale=0.6
 bottle5.setCollider('rectangle',0,0,20,50)


 rifle=createSprite(650,450)
 rifle.addImage(rifleImage)
 rifle.scale=0.6
 bullet=createSprite(rifle.x+50,rifle.y-100)
bullet.visible=false

aim=createSprite(rifle.x+50,rifle.y-300)
 aim.addImage(aimImage)
 aim.scale=0.5

 gameover=createSprite(750,240)
 gameover.addImage(gameoverImage)
 gameover.scale=0.4
 gameover.visible=false
}


function draw() {
  background(0);  
  rifle.x=mouseX
  if(gamestate==='play')
  {

  
  //console.log(counter1)
  if(frameCount%30===0 && counter1>0)
  counter1=counter1-1

  if(frameCount%30===0 && counter2>0)
  counter2=counter2-1
  
  if(frameCount%30===0 && counter3>0)
  counter3=counter3-1

  if(frameCount%30===0 && counter4>0)
  counter4=counter4-1

  if(frameCount%30===0 && counter5>0)
  counter5=counter5-1
  flag=1
  if(bullet.isTouching(bottle1))
  {
  if(bottle1.visible == true)
  {
  score=score+10
  bottlebreakingsound.play()
  flag=0
  }
  }
  if(bullet.isTouching(bottle1)) 
  {
  bottle1.visible=false
  
  
  }
else
bottle1.visible=true
  
  
flag1=1
if(bullet.isTouching(bottle2))
  {
  if(bottle2.visible == true)
  {
  score=score+20
  bottlebreakingsound.play()
  flag1=0
  }
  }
  if(bullet.isTouching(bottle2)) 
  {
  bottle2.visible=false
  }
else
bottle2.visible=true
  
flag2=1
if(bullet.isTouching(bottle3))
  {
  if(bottle3.visible == true)
  {
  score=score+30
  bottlebreakingsound.play()
  flag2=0
  }
  }
  if(bullet.isTouching(bottle3)) 
  {
  bottle3.visible=false
  }
else
bottle3.visible=true
  


flag3=1
if(bullet.isTouching(bottle4))
  {
  if(bottle4.visible == true)
  {
  score=score+40
  bottlebreakingsound.play()
  flag3=0
  }
  }
  if(bullet.isTouching(bottle4)) 
  {
  bottle4.visible=false
  }
else
bottle4.visible=true
  

flag4=1
if(bullet.isTouching(bottle5))
  {
  if(bottle5.visible == true)
  {
  score=score+50
  bottlebreakingsound.play()
  flag4=0
  }
  }
  if(bullet.isTouching(bottle5)) 
  {
  bottle5.visible=false
  }
else
bottle5.visible=true
  

aim.x=rifle.x+50
aim.y=rifle.y-300
if(frameCount%30===0 && s>0)
 s=s-1

 if(s===0 && m>0)
 {
   m=m-1
   s=5
 }
}


 if(m===0){
   gamestate='end'
 gameover.visible=true
 rifle.x=displayWidth/2
 rifle.y=displayHeight/2
 score=0
 aim.x=displayWidth/2
 aim.y=displayHeight/2
 aim.x=rifle.x+50
aim.y=rifle.y-300
 m=0 
 s=0
 }
 if(keyDown('r')){
 gamestate='play'
 gameover.visible=false
 }
  drawSprites();
  textSize(20)
  fill('white')
 text(10,bottle1.x-10,bottle1.y-80)
 text(20,bottle2.x-10,bottle2.y-90)
 text(30,bottle3.x-10,bottle3.y-80)
 text(40,bottle4.x-10,bottle4.y-80)
 text(50,bottle5.x-10,bottle5.y-80)
 text('score : '+score,displayWidth-150,50)
 text('time : '+m+' : '+s,displayWidth-200,100)
 if(m===0 && gamestate==='end')
text('press R to restart ',gameover.x-100,gameover.y+50)
}

function mouseClicked(){

  bullet=createSprite(rifle.x+50,rifle.y-100)
  bullet.addImage(bulletImage)
  bullet.scale=0.1
 
  bullet.velocityY=-5
}
function keyPressed(){
  

}