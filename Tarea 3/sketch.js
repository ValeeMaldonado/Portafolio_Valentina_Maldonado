let bgImg;
let stars = [];

function preload() {
  // Cargar la imagen de fondo
  bgImg = loadImage('https://static.vecteezy.com/system/resources/previews/009/877/699/non_2x/pixel-art-night-sky-background-with-clouds-and-stars-for-game-8-bit-vector.jpg');
}

function setup() {
  createCanvas(800, 400);
  // Establecer el modo de color en RGB para que las estrellas puedan tener transparencia
  colorMode(RGB);
  image(bgImg, 0, 0, width, height);
}

function draw() {
  // Dibuja la imagen de fondo en cada frame para refrescarla
  image(bgImg, 0, 0, width, height);
  
  // Actualiza y muestra todas las estrellas
  for (let i = stars.length - 1; i >= 0; i--) {
    stars[i].update();
    stars[i].display();
    
    // Elimina las estrellas que se han desvanecido completamente
    if (stars[i].transparency <= 0) {
      stars.splice(i, 1);
    }
  }
}

function mousePressed() {
  // Crea una nueva estrella en la posición del mouse
  let x = mouseX;
  let y = mouseY;
  let size = random(1, 4);
  let transparency = 255;
  
  // Agrega la estrella al arreglo de estrellas
  stars.push(new Star(x, y, size, transparency));
}

class Star {
  constructor(x, y, size, transparency) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.transparency = transparency;
  }

  update() {
    // Reduce gradualmente la transparencia
    this.transparency -= 2;
  }

  display() {
    // Estrella de 4 puntas
    fill(255, 255, 255, this.transparency);
    noStroke();
    let angle = TWO_PI / 4;
    beginShape();
    for (let i = 0; i < 4; i++) {
      let xVertex = this.x + cos(angle * i) * this.size * 5;
      let yVertex = this.y + sin(angle * i) * this.size * 9;
      vertex(xVertex, yVertex);
    }
    endShape(CLOSE);
  }
}
