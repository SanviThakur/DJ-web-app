song = "";
song2 = "";

function preload(){
    song = loadSound("Perfect.mp3");
    song2 = loadSound("LoveStory.mp3")
}




function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDE0);
    video.hide();
    
}

function draw(){
    image(video, 0, 0, 600, 500);
}

