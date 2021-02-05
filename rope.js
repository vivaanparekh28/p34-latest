class Rope{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            length:125
        }
        this.rope=Constraint.create(option)
        World.add(world,this.rope)
    }
    display(){
       // line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
    }
}