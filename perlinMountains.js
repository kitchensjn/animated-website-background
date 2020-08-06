function setup() {
  var canvasDiv = document.getElementById('background');
  var myCanvas = createCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
  myCanvas.parent("background");
  frameRate(60);
}

function windowResized() {
  var canvasDiv = document.getElementById('background');
  resizeCanvas(canvasDiv.offsetWidth, canvasDiv.offsetHeight);
}

function draw() {
  windowResized();
  background(51);
  
  fill(75,75,75,255);
  stroke(75);
  beginShape();
  vertex(0, height);
  for (var x = 0; x <= width; x++) {
	  var nx = map(x, 0, 1000, frameCount/200+10000, 10+frameCount/200+10000);
	  var y = (height/2 * noise(nx)) + height*2/7;
	  vertex(x, y);
  }
  vertex(width, height);
  endShape();

  fill(51,51,51,51);
  noStroke();
  beginShape();
  vertex(0, height);
  for (var x = 0; x <= width; x++) {
	  var nx = map(x, 0, 1000, frameCount/150+1000.05, 10+frameCount/150+1000.05);
	  var y = (height/2 * noise(nx)) + height*1/3-5;
	  vertex(x, y);
  }
  vertex(width, height);
  endShape();
  
  fill(187,187,187,255);
  stroke(187);
  beginShape();
  vertex(0, height);
  for (var x = 0; x <= width; x++) {
	  var nx = map(x, 0, 1000, frameCount/150+1000, 10+frameCount/150+1000);
	  var y = (height/2 * noise(nx)) + height*1/3;
	  vertex(x, y);
  }
  vertex(width, height);
  endShape();
  
  fill(75,75,75,50);
  noStroke();
  beginShape();
  vertex(0, height);
  for (var x = 0; x <= width; x++) {
	  var nx = map(x, 0, 1000, frameCount/100+0.05, 10+frameCount/100+0.05);
	  var y = (height/2 * noise(nx)) + height*1/2-5;
	  vertex(x, y);
  }
  vertex(width, height);
  endShape();
  
  fill(255,255,255,255);
  stroke(255);
  beginShape();
  vertex(0, height);
  for (var x = 0; x <= width; x++) {
    var nx = map(x, 0, 1000, frameCount/100, 10+frameCount/100);
    var y = (height/2 * noise(nx)) + height*1/2;
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
}