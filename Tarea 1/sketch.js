let trail = [];  // Almacena las posiciones anteriores del cursor


function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(200,220,240);
  
  // Agrega la posición actual del cursor al arreglo de la estela
  trail.push(createVector(mouseX, mouseY));
  
  // Limita la longitud de la estela para mantener un número finito de puntos
  if (trail.length > 220) {
    trail.splice(0, 1);
  }
  
  // Dibuja la estela transparente basada en las posiciones anteriores del cursor
  for (let i = 0; i < trail.length; i++) {
    let alpha = map(i, 0, trail.length, 255, 0);  // Cambia la transparencia gradualmente
    fill(255, alpha);
    noStroke();
    star(trail[i].x, trail[i].y, 3, 15, 5);
  }
  
  // Dibuja la estrella actual en la posición del cursor
  fill(255);
  noStroke();
  star(mouseX, mouseY, 5, 15, 6);
}

// Función para dibujar una estrella
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
    fill(255, 245, 0)
  }
  endShape(CLOSE);
}

