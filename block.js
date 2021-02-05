class Block{
    constructor(x,y){
        this.body=Bodies.rectangle(x,y,40,40,{density:0.0000003})
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y)
        angleMode(RADIANS);
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,40,40)
        
        pop()
    }

}