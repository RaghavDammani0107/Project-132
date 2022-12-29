status1 = "";
function preload() {
   img =  loadImage('Animals image.jpeg');
}

function setup() {
    canvas = createCanvas(400,500);
    canvas.center();
    object_detector = ml5.objectDetector('cocossd', modeloaded);
    document.getElementById('status').innerHTML = "Detecting Objects";
}

function modeloaded() {
    console.log("Model is loaded");
    status1 = true;
    object_detector.detect(img, gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}