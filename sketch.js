let cor;
let circuloX; // horizontal
let circuloY; // vertical

function setup() {
  createCanvas(650, 650);
  background(color(255, 0 , 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  
  circuloX = [0, 0, 0];
  circuloY = [random(height), random(height), random(height)];
}

function draw() {
  
  fill(cor);
  
  for(let contador in circuloX) {
    circle(circuloX[contador], circuloY[contador], 30);    
    circuloX[contador]+= random(0,3);
    circuloY[contador]+= random(-3,3); 
    
    if(circuloX[contador] >= width){
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
    }
  }
  
  if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
  }
}
