function setup()
{
    video= createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(560,150);
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

}
function draw()
{
    background("grey")
}
function modelLoaded()
{
    console.log(" Pose net is initialized");
}
function gotPoses()
{
    if(results.length>0)
    {
        console.log(results);
    }
}