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
  // ray = new Ray(car, angle);
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
  walls[6].show();
  walls[7].show();
  walls[8].show();
  walls[9].show();
  walls[10].show();
  walls[11].show();
  walls[12].show();
  walls[13].show();
  walls[14].show();
  walls[15].show();
  walls[16].show();
  walls[17].show();
  walls[18].show();
  walls[19].show();


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




  // ray1.show();
  // ray.lookAt(mouseX, mouseY);

  // let pt = ray.cast(wall);
  // if (pt){
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }
}
