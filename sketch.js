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
let carX = 100;
let carY = 300;
let car;
let angle = 90;



function setup (){
  createCanvas (displayWidth * 0.9, displayHeight * 0.8);
  for (let i = 0; i < 1; i++) {
    let x1 = 150;
    let y1 = 150;
    let x2 = 150;
    let y2 = 550; 
    wall = new Boundary(x1, y1, x2, y2);
  }
  circuit = new Circuit();
  particle = new Particle();
  move = new Move();
  ray = new Ray(car, angle);
}

function draw(){;

  const car = circuit.buildcar(carX, carY);

  background(0);

  circuit.build();


  wall.show();

  particle.update(car);

  particle.look(wall, car);

  // const pt = particle.point(wall);

  const pt = particle.look(wall, car);

  // console.log(pt);

  move = new Move();  

  lenX = move.disX(pt, carX);
  lenY = move.disY(pt, carY);

  // console.log(lenX, carX, lenY, carY);

  move = move.move(lenX, carX, lenY, carY);

  carX = move;

  text(lenX, 40, 40);

  text(mouseX + " : " + mouseY, 40, 600);

  particle.show();




  // ray.show();
  // ray.lookAt(mouseX, mouseY);

  // let pt = ray.cast(wall);
  // if (pt){
  //   fill(255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }
}
