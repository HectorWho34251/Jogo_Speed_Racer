var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var gameState;

var car1, car2, track, allPlayers;
var car1_img, car2_img, track_img;
var fuel_img, fuels, powerCoin_img, powerCoins, life_img, blast_img;
var obstacle1_img, obstacle2_img, obstacles;

var cars = [];

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1_img = loadImage("assets/car1.png");
  car2_img = loadImage("assets/car2.png");
  track_img = loadImage("assets/track.jpg");
  fuel_img = loadImage("assets/fuel.png");
  powerCoin_img = loadImage("assets/goldCoin.png");
  obstacle1_img = loadImage("assets/obstacle1.png");
  obstacle2_img = loadImage("assets/obstacle2.png");
  life_img = loadImage("assets/life.png");
  blast_img = loadImage("assets/blast.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount == 2) {
    game.update(1);
  }
  if(gameState == 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}