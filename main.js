function setup(){
    video = createCapture(video)
    video.size(550,500);

    canvas= createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw(){
    background("#0000FF")
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
    }
}
