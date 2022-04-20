let s;



function setup() {
  // put setup code here
  createCanvas(600,600);
  background(0);
}

function draw() {
  // put drawing code here
  background(51);

}

function keyPressed (){
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  }else if (keyCode == DOWN_ARROW){
    s.dir(0,1);
  }else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }else if (keyCode == RIGHT_ARROW){
    s.dir(1,0);  
  }
}
function Snake() {
  this.x = ;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;

  this.update = function () {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

  }
}