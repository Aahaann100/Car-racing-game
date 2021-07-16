var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var car1,car1Img,car2,car2Img,car3,car3Img,car4,car4Img,trackSuit,trackSuitImg,cars;

var form, player, game;

function preload(){

  car1Img=loadImage("car1.png")
  car2Img=loadImage("car2.png")
  car3Img=loadImage("car3.png")
  car4Img=loadImage("car4.png")
  trackSuitImg=loadImage("TRACKSUIT.JPG")

}


function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
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