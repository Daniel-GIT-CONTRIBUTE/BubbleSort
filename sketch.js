let b;
let running = true;
let canvas_height = 500;
let canvas_width = 500;
let sortingInProgress = false;

function setup() {
  var container = document.getElementById('container');
  var canvas = createCanvas(canvas_height, canvas_width);
  canvas.parent(container);
  b = new block();
  create_num_set();
  frameRate(6);
  sortButtonSetup();
  resetButtonSetup();
}

function sortButtonSetup(){
    var buttonElement = document.querySelector('.sort');
    buttonElement.addEventListener('click', function(event){
        sortingInProgress = true;
        function runTwentyTimes(){
            if(!sortingInProgress){return};
            b.update();
            setTimeout(runTwentyTimes, 200);
            if(b.checkIfDone() == true){
                return;
            }
        }
        runTwentyTimes(); 
    });
    
}

function resetButtonSetup(){
    var resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', function(event){
        b.reset();
        sortingInProgress = false;
    });
}

function draw() {
    background(80);
    showBlocks();
}


function buttonPressed(){
    b.update();
}

function keyPressed(){    
    if (key == ' '){
        // b.update();
        function runThreeTimes(){
            b.update();
            setTimeout(runThreeTimes, 500);
        }
        runThreeTimes();
    }
}


function stopRunning(){
    running = false;
}

function continueRunning(){
    running = true;
}
