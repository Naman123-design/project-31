class Particle{
	constructor(x,y,r){
		var options={
			isStatic:true
        }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
        this.body.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
	}
	display(){
	var pos=this.body.position;		
    push()
	translate(pos.x, pos.y);
	rectMode(CENTER)
//	strokeWeight(3);
	 //fill(255,0,255)
	ellipse(0,0,this.r, this.r);
	pop()	
    }
}