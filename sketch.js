// Single-sketch example
let walls = [];
let ray;
let pos;
let particle;
let move;
let amount = 0;
let point;
let lenX;
let lenY;
let carX = 51;
let carY = 300;
let car;
let angle = 90;



function setup (){
  createCanvas (displayWidth * 0.9, displayHeight * 0.8);
  circuit = new Circuit();
  particle = new Particle();
  move = new Move();
  car = new Car(carX, carY);
  ray = new Ray(car, angle);
}

function draw(){;

  background(0);

  walls = circuit.build(walls);

  walls[0].show();
  walls[1].show();
  walls[2].show();
  walls[3].show();
  walls[4].show();
  walls[5].show();

  particle.update(car);

  // particle.look(walls[0], car);

  const pt = particle.look(walls[1], car);

  move = new Move();  

  lenX = move.disX(pt, car);
  lenY = move.disY(pt, car);

  move = move.move(lenX, lenY, car);

  car = move;

  text(lenX, 40, 40);

  particle.show();




  // ray.show();
  // ray.lookAt(mouseX, mouseY);

  // let pt = ray.cast(wall);
  // if (pt){
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }
}
