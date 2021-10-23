noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristY = 0;


function setup()
    {
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550,450);
canvas.position(600,100);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
    }

    function gotPoses(results)
    {
if(results.length > 0)
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +"noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
}
    }

    function modelLoaded()
    {
        console.log('poseNet is initialized!');
    }

    function draw()
    {
        background('#98989c');

        document.getElementById("square_sides").innerHTML = "Width And Height of a Square Will be = " + difference +"px";
        fill('#03b1fc');
        stroke('#03b1fc');
        square(noseX, noseY, difference);
    }
