var dog,sadDog,happyDog;
var foodButton;
var addFood;
var foodObj;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  food=loadImage("Images/milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  food = new Food

  feed.button = createButton('Feed Dog')
  feed.button.position(480, 200);
  feed.mousePressed(feedDog);

  add.button = createButton('Add Food')
  add.button.position(580, 200);
  add.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  drawSprites();
  food.display();
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog() {
  dog.addImage(happyDog);
  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}

//function to add food in stock
function addFoods() {
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}