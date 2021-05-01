leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
songs = "";
function preload()
{

}
function setup()
{
    canvas = createCanvas(500, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video , 0 , 0 ,500 , 350);
}

