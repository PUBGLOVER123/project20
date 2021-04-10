
function preload() {
 tomimage = loadAnimation ("images/cat1.png")
 jerryimage = loadAnimation ("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png")
 groundImage = loadImage ("images/garden.png")
 angryTom = loadAnimation ("images/cat2.png","images/cat3.png","images/cat4.png")
}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here
    tom = createSprite (800,450,20,20)
    jerry = createSprite (200,450.20,20)
    tom.addAnimation ("t",tomimage)
    tom.scale = 0.1
    jerry.addAnimation ("j",jerryimage)
    jerry.scale = 0.1
    jerry.velocityX = 3

}

function draw() {

    background(groundImage);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x - jerry.x < tom.width/2 + jerry.width/2) {
        jerry.velocityX = 0
        tom.addAnimation ("t",angryTom)
    }
    else {
        tom.addAnimation ("t",tomimage)
        jerry.velocityX = 3
    }
    drawSprites();
}


