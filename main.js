 noseX = 0;
noseY = 0;

function preload(){
    clown_hand = loadImage('https://i.postimg.cc/QM68Dsmw/pngimg-com-moustache-PNG37.png')
}

function setup(){
     canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_hand, noseX-30, noseY-30, 70, 70);
}