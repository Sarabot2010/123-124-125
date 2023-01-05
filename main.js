noseX = 0;
noseY = 0;
diferencia = 0;
derechaX = 0;
izquierdaX = 0;
var texto = "";

function ingresar() {
texto = document.getElementById("entrada").value;
console.log(texto);
}

function setup() 
{
  video = createCapture(VIDEO);
  video.size(350, 300);
  video.position(50,200)
  canvas = createCanvas(350, 350);
  canvas.position(510, 210);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function draw() {
    background('#FFE4FA');
    fill("#33CCCC");
    stroke("#E4FFF9");
    //square(noseX,noseY,diferencia);
    document.getElementById("font_side").innerHTML = "El tamaño de la palabra es: "+diferencia+" px";

    textSize(diferencia);
    text(texto,20,200);
}

function modelLoaded() {
    console.log("PoseNet se inicializo");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nariz X = "+noseX+" Nariz Y = "+noseY);
        izquierdaX = results[0].pose.leftWrist.x;
        derechaX = results[0].pose.rightWrist.x;
        diferencia = floor(izquierdaX - derechaX);
    }
}