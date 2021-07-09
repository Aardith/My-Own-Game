var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  c1= loadImage("images/Red Car.png");
  c2 = loadImage("images/Pink Car.png");
  c3 = loadImage("images/Green Car.png");
  c4 = loadImage("images/Yellow Car.png");
  ground = loadImage("images/ground.png");
  o1 = loadImage("images/sprite_0.png");
  o2 = loadImage("images/sprite_1.png");
  o3 = loadImage("images/sprite_4.png");
  pain = loadImage("images/PAIN.png");
  crash = loadSound("images/Old Car.mp3");
  defaultCar = loadImage("images/car1.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  obstacle = createSprite(100,100);
  w = random(displayWidth -100,displayHeight -)
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
