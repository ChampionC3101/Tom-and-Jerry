var catImg, cat1, cat2Img, cat4Img;
var gardenImg;
var mouseImg, mouse, mouse2Img, mouse4Img;

function preload() 
{
    //load the images here
    (catImg = loadImage(cat1.png));
    (cat2Img = loadAnimation(cat2.png, cat3.png));
    (cat4Img = loadImage(cat4.png));
    (gardenImg = loadImage(garden.png));
    (mouseImg = loadImage(mouse1.png));
    (mouse2Img = loadAnimation(mouse2.png, mouse3.png));
    (mouse4Img = loadImage(mouse4.png));
}

function setup()
{
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat1 = createSprite(800,600,50,50)
    cat1.addImage("tom",catImg);

    mouse.createSprite(200,599,50,50);
    mouse.addImage("jerry",mouseImg)

    garden.createSprite(500,400,1000,800);
    garden.addImage("backImg",gardenImage)
    garden.scale = 3;
}

function draw() 
{

    background(255,255,255);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat1.x - mouse.x < (cat1.width - mouse.width/2))
    {
        cat1.addAnimation("catsitting",cat4Img);
        cat1.changeAnimation(catsitting);
        cat1.frameDelay = 50;

        mouse.addAnimation("mouseinspecting",mouse4Img);
        mouse.changeAnimation(mouseinspecting);
        mouse.frameDelay = 50;
    }


    drawSprites();
}


function keyPressed()
{

  //For moving and changing animation write code here;
  cat1.addAnimation("catwalking",cat2Img);
  cat1.changeAnimation(catwalking);
  cat1.frameDelay = 25;

  mouse.addAnimation("mousedancing",mouse2Img);
  mouse.changeAnimation(mousedancing);
  mouse.frameDelay = 25;


}
