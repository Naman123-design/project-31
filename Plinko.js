class Plinko{
	constructor(x,y,r){
		var options={
			isStatic:true
        }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}
	display(){
	var pos=this.body.position;		
    push()
	translate(pos.x, pos.y);
	rectMode(CENTER)
	//strokeWeight(3);
	//fill(255,0,255)
	ellipse(0,0,this.r, this.r);
	pop()	
    }
}