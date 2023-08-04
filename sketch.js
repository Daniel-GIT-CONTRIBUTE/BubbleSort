var b;
let running = true;
var canvas_height = 500;
var canvas_width = 500;

function setup() {
  createCanvas(canvas_height, canvas_width);
  b = new block();
  create_num_set();
  frameRate(1);
}


function draw() {
    background(80);
    showBlocks();
    // b.update();
    // bubbleSort();
}

function keyPressed(){
    if (key == ' '){
        b.update();
    }
}

function stopRunning(){
    running = false;
}

function continueRunning(){
    running = true;
}
