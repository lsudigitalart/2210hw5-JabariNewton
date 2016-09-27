var a = 0;
var size;
var rotSpeed;
var count=0;
var blacklines = [];
var counter;
var a =0;
var xSpace;
var r = 1;


// function setup(){
//   createCanvas(500,500);
//
//   for(a =0; a < 1000;a++){
//   blacklines[a]= a + 1;
//   }
// }
//
//
// function draw(){
//   background(0,0,0);
//   for (var i = 0; i < 1000; i++) {
//     stroke(250,0,0);
//     println(a);
//     line(blacklines[a],a,width,height);
// }
// }
function setup()
{
  createCanvas(500,500);
  background(0);
  angleMode(DEGREES);
  smooth();
}


function draw(){
  // a = random(0,50);
//
// for (var i = 0; i < 5;i++){
//   xSpace = xSpace + 50;
// }
rotate(r);
stroke(250,250,250,100);

line(50,250,250,random(50,250));
line(450,250,250,random(50,250));
// line(0,50,random(0,150),random(0,150));


stroke(50);
s=random(0,500)
rotate(random(0,50));
// line(s,s,height,width);

rect(250,350,10,10);

translate(width,height/2);
// rotate(PI/3.0);


if(a < 360){
  a =a + 1;
  println(a);

}



// line(250,250,a,a);
// stroke(50);
// fill('white');
}
