let circles = [];
let numCircles = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Crear círculos aleatorios
  for (let i = 0; i < numCircles; i++) {
    let x = random(width);
    let y = random(height);
    let radius = random(20, 50);
    let speedX = random(2, 4);
    let speedY = random(2, 4);
    circles.push(new Circle(x, y, radius, speedX, speedY));
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
    for (let j = i + 1; j < circles.length; j++) {
      if (circles[i].intersects(circles[j])) {
        circles[i].changeColor();
        circles[j].changeColor();
      }
    }
  }
}

class Circle {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color(random(255), random(255), random(255));
  }
  
  move() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Comprobar si se sale del lienzo y hacer que rebote
    if (this.x < 0 || this.x > width) {
      this.speedX *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.speedY *= -1;
    }
  }
  
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.radius * 2);
  }
  
  intersects(otherCircle) {
    let d = dist(this.x, this.y, otherCircle.x, otherCircle.y);
    return d < (this.radius + otherCircle.radius);
  }
  
  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }
}
