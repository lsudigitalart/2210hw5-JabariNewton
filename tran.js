var s = 0;
var r = 0;
var t = 0;
function setup(){
  createCanvas(1000,1000);
  background(0,10);
  rectMode(CENTER);
  angleMode(DEGREES);
  smooth();
}

function draw(){
  background(0,10);

  stroke(250,250,250,100);

  line(50,250,250,random(50,250));
  line(450,250,250,random(50,250));
  // line(0,50,random(0,150),random(0,150));
  
  s=s + 0.002;
  t= t + 0.01;
  translate(width/2, height/2);
  rotate(r);

  if (s > 1)
  {
    r = r + 1;

    rect(30,30,10,10);
    rotate(r);
    scale(s);


    rect(50,30,10,10);
    rotate(r);
    scale(s);

  }
  scale(s);
  // rotate(PI/map(mouseX,0,400,0,TWO_PI));
  println(map(mouseX,0,400,0,360));
  rect(0,0,10,10);

  // rect(0,50,50,50);
  // println(mouseX,0,400,0,2*PI));
}
