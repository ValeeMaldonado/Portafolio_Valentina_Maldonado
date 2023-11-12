let colors = ["#f7accf", "#efc0d3", "#ebcad5", "#e7d3d6", "#dfe6da", "#dbf0dc", "#d6f9dd", "#c7f9d1", "#b8f8c4", "#99f7ab"];
let ellipses = []; // Array para almacenar las elipses dibujadas

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(102);

  // Crear botón de borrado
  let clearButton = createButton("Borrar elipses");
  clearButton.position(10, 10);
  clearButton.mousePressed(clearEllipses);
}

function draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
  moveEllipses(); // Mover las elipses
  // Dibujar todas las elipses almacenadas en el array
  for (let ellipseObj of ellipses) {
    stroke(ellipseObj.color);
    fill(ellipseObj.color);
    strokeWeight(2);
    ellipse(ellipseObj.x, ellipseObj.y, ellipseObj.size, ellipseObj.size);
  }
}

function variableEllipse(x, y, px, py) {
  let speed = dist(x, y, px, py);
  let randomTransparency = random(100, 200); // Valor de transparencia aleatorio entre 100 y 200
  let randomColor = random(colors);
  
  // Establece el color con transparencia aleatoria
  stroke(randomColor + hex(randomTransparency, 2));
  fill(randomColor + hex(randomTransparency, 2));
  strokeWeight(2);
  ellipse(x, y, speed, speed);

  // Almacena la información de la elipse en el array
  ellipses.push({ x: x, y: y, size: speed, color: randomColor + hex(randomTransparency, 2), xOffset: random(-1, 1), yOffset: random(-1, 1) });
}

function moveEllipses() {
  // Mueve todas las elipses en el array ligeramente
  for (let ellipseObj of ellipses) {
    ellipseObj.x += ellipseObj.xOffset;
    ellipseObj.y += ellipseObj.yOffset;
  }
}

function clearEllipses() {
  // Borra todas las elipses almacenadas en el array
  ellipses = [];
  background(102); // Limpia el fondo
}
