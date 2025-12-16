let speedx = 10
let speedy = 10
let gravity = 1
let x = 300
let y = 300
let dark = 10
const canvasSize = 600
const ballSize = 25

function setup() {
  createCanvas(canvasSize, canvasSize);
  colorMode(HSB)
  speedx = random(5, 15)
  speedy = random(5, 15)
}

function draw() {
  fill(dark)
  dark = dark+2
   if (dark > 60) {
      dark = 0
    }
  noStroke()  // Remove stroke from the ball
  rect(x, y, ballSize, ballSize)
  
  x += speedx
  y += speedy
  speedy += gravity  // Add this line to apply gravity to vertical speed
  
    if (x > canvasSize-ballSize || x < ballSize) {
      speedx = -speedx
    }
     if (y > canvasSize-ballSize || y < ballSize) {
      speedy = -speedy * 0.8  // Added dampening factor
    }
    if (y < ballSize) {
        gravity = 1  // Keep gravity constant instead of increasing it
    } else {
        gravity = 1
        if (y > 600 - ballSize) {
            y = 600 - ballSize
            
        };
         if (x > 600 - ballSize) {
            x = 600 - ballSize
            
        };
         if (x < 0 - ballSize) {
            x = 0 - ballSize
            
        };
        
    }
}

function keyPressed() {
  if (key === ' ') {  // Check if spacebar is pressed
    speedy = -20;     // Large negative value to make the ball jump up
  }
}
