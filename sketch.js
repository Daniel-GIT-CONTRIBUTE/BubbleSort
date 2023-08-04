var b;
var canvas_height = 500;
var canvas_width = 500;
var block_width = 50;
var block_spacing = 50
var num_of_blocks = canvas_width/block_spacing;
const my_array = [];
var my_num;
let running = true;

function setup() {
  createCanvas(canvas_height, canvas_width);
  b = new block();
  create_num_set();
  frameRate(2);
}


function draw() {
    if(running){
        background(80);
        drawAllContent();
        bubbleSort();
    }
    if(keyCode === UP_ARROW){
        stopRunning();
        // println(this.canvas_height);
        console.log("pressued up"); 
        console.log(canvas_height);
    }
    
    if(keyCode === DOWN_ARROW){
        continueRunning();
        console.log(canvas_height);
    }
}


function stopRunning(){
    running = false;
}

function continueRunning(){
    running = true;
}

function drawAllContent(){
    for(let i=0; i<num_of_blocks; i++){ // Add 'let' here to declare the loop variable i
        b.show(((i)*block_spacing), canvas_height, block_width, (-my_array[i]));
        showTextVertically(my_array[i], ((i)*block_spacing)+26, canvas_height-my_array[i]+30);
      };
}

function block(){
  this.x = 0;
  this.y = 450;

  this.update = function(){
    this.width = this.width + this.speed;
    this.height = this.height;
   }

  this.show = function(x, y, w, h) {
    fill(255);
    rect(x,y,w,h);
    
  }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(){
    // await delay(3000);
    for(let j = 0; j < num_of_blocks - 1; j++){
        // await delay(2000);
        for(let i = 0; i < num_of_blocks - 1; i++){
            // await delay(1000);
            if(my_array[i] > my_array[i+1]){
                j = my_array[i];
                my_array[i] = my_array[i+1];
                my_array[i+1] = j;

            }
            //   for(let i=0; i< 5; i++){
            //     showTextVertically(my_array[i], ((i)*block_spacing)+26, 30);
            // }
            }
    }
}



function create_num_set(){
  for(let i = 0; i < num_of_blocks; i++){
    my_array.push(Math.floor(Math.random()*(canvas_height-50))+50);
  }
}

function showTextVertically(textStr, x, y) {
  push(); // Save the current drawing state
  translate(x, y); // Move the origin to the desired position
  rotate(HALF_PI*3); // Rotate the canvas by 90 degrees (PI/2 radians)
  fill(25);
  text(textStr, 0, 0); // Draw the text at (0, 0) after rotation
  pop(); // Restore the previous drawing state
  
}


