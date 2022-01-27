noseX = 0;
noseY = 0;

function preload() {
    mustache_nose = loadImage('https://i.postimg.cc/c1nfc6SS/imageedit-3-7455574137.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is intitalized');
}

function gotPoses(results) 
{
    if (results.length > 0) 
    {
        console.log(results);
        noseX = results[0].pose.nose.x - 30;
        noseY = results[0].pose.nose.y + 5;
        console.log('mustache x = ' + noseX);
        console.log('mustache y = ' + noseY);        
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache_nose, noseX, noseY, 60, 26);
}

function take_snapshot() {
    save('img_filter_web_app.png');
}