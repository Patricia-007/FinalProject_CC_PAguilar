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