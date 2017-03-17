
function setup() {
  createCanvas(250,250)
  r = random(255);
  g = random(255);
  b = random(255);

}
function draw() {
background(235,236,228);
noStroke();
fill(r,g,b,127);            //purple
ellipse(mouseY, 175, 100, 100); 

fill(r,g,b,127);           //purple
ellipse(mouseX,75,100,100);

fill(242,90,56,150);       //orange
rect(125,100,50,100);

fill(36,174,199,150);          //blue
rect(75,50,50,100);
}

function mousePressed() {
 
  var d = dist(mouseX, mouseY, 100, 100);
  if (d < 100 ) {

    r = random(255);
    g = random(255);
    b = random(255);
  }
}

