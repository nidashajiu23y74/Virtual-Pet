//Create variables here
var dog;
var happyDog;
var database;
var foodS;
var foodStock;
function preload()
{
  dogImage1=("images/dogImg.png");
  dogImage2=("images/dogImg.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  dog = dogImage1(200,200,10,40);
  foodStock = datatbase.ref("ref");
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46,139,27);
  drawSprites();
  //add styles here
  text("foodStock :" + foodStock, 250,210);
  textSize(5);
  fill();
  stroke();

}

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref("/").update({
    Food:x
  })
}