var block_width = 50;
var block_spacing = 50
var num_of_blocks = canvas_width/block_spacing;
const my_array = [];
var my_num;
var i = 0;
var globalCount = 0;
var endOfArray = num_of_blocks - 1;

function create_num_set(){
    for(let i = 0; i < num_of_blocks; i++){
      my_array.push(Math.floor(Math.random()*(canvas_height-50))+50);
    }
}
 


function block(){
  this.x = 0;
  this.y = 450;

  this.update = async function(){    
    console.log("space");
    if(endOfArray != 1){
        if(i == (endOfArray)){
            i = 0;
            endOfArray -= 1;
        };
        if(my_array[i] > my_array[i+1]){
            showIndividualBlocks(i);
            showIndividualBlocks(i+1);
            j = my_array[i];
            my_array[i] = my_array[i+1];
            my_array[i+1] = j;
            i ++;
        } else{
            showIndividualBlocks(i);
            showIndividualBlocks(i+1);
            i ++;
        };
    }
    }

    this.reset = function () {
      i = 0;
      endOfArray = num_of_blocks - 1;
      my_array.length = 0; // Clear the array
      for (let i = 0; i < num_of_blocks; i++) {
        my_array.push(Math.floor(Math.random() * (canvas_height - 50)) + 50);
        showBlocks(i);
      }
    };


  this.show = function(x, y, w, h, color ="rgb(255)" ) {
      fill(color);
      rect(x,y,w,h);
  }  
}  

function showIndividualBlocks(index){
    b.show(((index)*block_spacing), canvas_height, block_width, (-my_array[index]), "rgb(0,255,0)");
    showTextVertically(my_array[index], ((index)*block_spacing)+26, canvas_height-my_array[index]+30);
}

function showBlocks(){
    for(let i=0; i<num_of_blocks; i++){ // Add 'let' here to declare the loop variable i
        b.show(((i)*block_spacing), canvas_height, block_width, (-my_array[i]));
        showTextVertically(my_array[i], ((i)*block_spacing)+26, canvas_height-my_array[i]+30);
      };
}


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(){
    for(let j = 0; j < num_of_blocks - 1; j++){
        for(let i = 0; i < num_of_blocks - 1; i++){
            let input = prompt("enter");
            // initBlocks();
            if(my_array[i] > my_array[i+1]){
                j = my_array[i];
                my_array[i] = my_array[i+1];
                my_array[i+1] = j;
            }
            }
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


