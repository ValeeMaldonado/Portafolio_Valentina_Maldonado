let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
  strokeWeight(2);
}

function draw() {
  background(180,20);
  
  for (let star of stars) {
    star.move();
    star.display();
  }
}

function mouseClicked() {
  let x = mouseX;
  let y = mouseY;
  let mainStar = new Star(x, y, random(30, 100), color(random(255), random(255), random(255)));
  stars.push(mainStar);
  
  for (let i = 0; i < 5; i++) {
    let angle = TWO_PI / 5 * i;
    let xOffset = cos(angle) * 50;
    let yOffset = sin(angle) * 50;
    let smallerStar = new Star(x + xOffset, y + yOffset, random(10, 30), color(random(255), random(255), random(255)));
    stars.push(smallerStar);
  }
}

class Star {
  constructor(x, y, size, clr) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.clr = clr;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }
  
  move() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  
  display() {
    push();
    translate(this.x, this.y);
    fill(this.clr);
    beginShape();
    for (let i = 0; i < 10; i++) { // 10 vértices para la estrella
      let angle = TWO_PI * i / 10;
      let r = i % 2 === 0 ? this.size * 0.7 : this.size * 0.28; // Cambiar los radios
      let xVertex = r * cos(angle);
      let yVertex = r * sin(angle);
      vertex(xVertex, yVertex);
    }
    endShape(CLOSE);
    pop();
  }
}








