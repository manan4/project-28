class Slingshot{
    constructor(bodyA,bodyB){
var options= {
    bodyA:bodyA,
    bodyB:bodyB,
    stiffness:0.5,
    length:350
}
this.bodyA = bodyA;
this.bodyB = bodyB;
this.sling = Constraint.create(options);
World.add(world,this.sling);
    }

    fly(){
    this.sling.bodyA = null;
   }
   
display(){
    if(this.sling.bodyA){
    var posA = this.sling.bodyA.position;
    var posB = this.sling.bodyB.position; 
    strokeWeight(3);
    line(posA.x,posA.y,posB.x,posB.y);
    }
}
}