class Boat{

  constructor(x, y, width, height, boatPos){

  this.width = width;
  this.height = height;
  this.boatPos = boatPos;

  this.body = Bodies.rectangle(x, y, this.width, this.height);
  this.image = loadImage("assets/boat.png")
  World.add(world, this.body)

  }

  remove(i) {
    setTimeout(() => {
      Matter.World.remove(world, boats[i].body)
      delete boats[i]
    } , 2000)
  }

  display(){

   const angle = this.body.angle;
   const pos = this.body.position;

   push();
    translate(pos.x, pos.y);
    rotate(angle)
    imageMode(CENTER)
    image(this.image, 0, this.boatPos, this.width, this.height)
   pop();
  }

}