const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
ground = new Ground(240,770,480,20);

/*div1 = new Divisions(0,610,10,300);
div2 = new Divisions(70,610,10,300);
div3 = new Divisions(140,610,10,300);
div4 = new Divisions(210,610,10,300);
div5 = new Divisions(280,610,10,300);
div6 = new Divisions(350,610,10,300);
div7 = new Divisions(420,610,10,300);
div8 = new Divisions(480,610,10,300);
*/
plinko = new Plinko(200,300,10);

par = new Particle(300,300,10);
}

function draw(){
    background("black");
    Engine.update(engine);

for (var k = 0; k <=innerWidth; k = k + 80){
divisions.push(new Divisions(k, height - divisionHeight/2 , 10, divisionHeight))
}

ground.display();

/*div1.display();
div2.display();
div3.display();
div4.display();
div5.display();
div6.display();
div7.display();
div8.display();*/
// divisions.display();
plinko.display();

par.display();
}