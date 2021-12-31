music1 = "";
music2 = "";

function preload(){
    music1 = loadSound("Music1.mp3");
    music2 = loadSound("Music2.mp3");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(570,220);
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video,0,0,400,400);
}

