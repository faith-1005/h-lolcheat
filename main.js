function preload(){

    classifier = ml5.imageClassifier("DoodleNet");

}

function setup(){

    canvas = createCanvas(400, 400);
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    
}

function draw(){

    strokeWeight(9);
    stroke("black");
    if(mouseIsPressed){

        line(pmouseX, pmouseY, mouseX, mouseY);
        
    }
}

function classifyCanvas(){

    classifier.classify(canvas, gotResult);
    
}

function gotResult(error, results){

    if(error){

        console.error(error);

    }
    else{

        console.log(results);
        document.getElementById("perseus").innerHTML = "label: "+results[0].label;
        document.getElementById("con").innerHTML = "Confidence: "+Math.round(results[0].confidence*100)+"%";
        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);

    }
}

function erase(){

    background("#f8edeb");

}