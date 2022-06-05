var mode; // determine whether app has started, intro screen
var yset = 0.0;
var intro; //intro

var points = []; //where points spawn





//colour values
var r1;
var r2;
var g1;
var g2;
var b1;
var b2;

var density = 50; //line amounts

var mode;
var guip;
var sliderImpetus =1;
var sliderJit = 0.01;
var sliderOrder = 1;
var sliderVanish = 0;
var Menu;
var StartB;
var Clearb;

function preload(){
  
  img = loadImage('assets/example2.jpg'); 
  
  //load image, load pixels from image
}



function projectg() {

  this.setup = function(){
    
    createCanvas(880, 600);
    background(0);
    guip = createGui();
  StartB = createButton("START", width /1.18, height /10, 75, 25);
  StartB.setStyle({textSize: 10, fillLabel: color(170), rounding: 3, strokeWeight: 0, fillBg: color(100), fillBgActive: color(250), fillBgHover: color(200)});
  StartB.onRelease = this.onRelease;

  sliderSpeed = createSlider("IMPETUS", width/1.2, height /5, 100, 20, 1, 6);
  sliderSpeed.val = sliderImpetus;
   //speed
  sliderJitter = createSlider("Jitter", width/1.2, height /3.5, 100, 20, 0.01, 0.05);
  sliderJitter.val = sliderJit;

  sliderOrd = createSlider("Order", width/1.2, height /2.7, 100, 20, 1, 20);
  sliderOrd.val = sliderOrder;
//controls direction
  sliderVan = createSlider("Vanish", width/1.2, height /2.2, 100, 20, 0, 10);
  sliderVan.val = sliderVanish;
//controls alpha
  Menu = createButton("MENU", width /1.18, height /1.7, 75, 25);
  Menu.setStyle({textSize: 10, fillLabel: color(170), rounding: 3, strokeWeight: 0, fillBg: color(100), fillBgActive: color(250), fillBgHover: color(200)});


  Clearb = createButton("CLEAR", width /1.18, height /1.9, 75, 25);
  Clearb.setStyle({textSize: 10, fillLabel: color(170), rounding: 3, strokeWeight: 0, fillBg: color(100), fillBgActive: color(250), fillBgHover: color(200)});
  Clearb.onRelease = this.onRelease;
  //clear functionality, calls the onRelease button to re-start the project - same as START button

  

    }
    this.onRelease = function(){
      background(0);
      noiseDetail(2);
      angleMode(DEGREES);
      var space = width / density;
      
      for (var x = 0; x < width; x += space) {
        //starting points for lines, create vectors + make them random to remove the grid-like structure - i.e creates points
        for (var y = 0; y < height; y += space) {
          var p = createVector(x + random(-10, 10), y + random(-10, 10));
          points.push(p); //adds vector to points array
        }
      }
      
      //shuffle array to randomize
      shuffle(points, true);
      //colour values
      r1 = (20, 25, 45);
      r2 = (20, 25, 45);
      g1 = (20, 25, 45);
      g2 = (20, 25, 45);
      b1 = random(255);
      b2 = random(255);
      mode = 1;
     
    }


   this.draw = function(){

    sliderVanish = sliderVan.val;
    background(0,sliderVanish);
    
    fill(150);
    stroke(0);
    text("Impetus", width/1.155, height /5.6);
    text("Jitter", width/1.14, height /3.7);
    text("Order", width/1.14, height /2.8);
    text("Vanish", width/1.14, height /2.28);
  
    guip.draw();

    if(mode == 1);
    {

   

    if (frameCount <= points.length) {
      //fameCount spawning points diff time
      var max = frameCount; 
    } else {
      var max = points.length;
    }

    for (var i = 0; i < max; i++) {
      // control colours
      var r = map(points[i].x, 0, width, r1, r2);
      var g = map(points[i].y, 0, width, g1, g2);
      var b = map(points[i].x, 0, width, b1, b2);

      fill(r, g, b);

      sliderJit = sliderJitter.val;
      sliderOrder = sliderOrd.val;
      var angle = map(
        noise(points[i].x * sliderJit, points[i].y * sliderJit),0,sliderOrder,0,720); //Perlin noise command re-mapped to slider i.e show/display 

      sliderImpetus = sliderSpeed.val;
      points[i].add(createVector(cos(angle), sin(angle) *sliderImpetus));
      //vector added to each point based on angle i.e controls movement of the vector with a speed variable

      
      noStroke();
      c=img.get(points[i].x, points[i].y)
      fill(c)
      circle(points[i].x, points[i].y, 1);
      }


    }
    if (Menu.isPressed)
    {
      guip.hide();
      //guip to hide all guis' on this screen before displaying the menu 
      background(31, 32, 41);
      this.sceneManager.showScene(mainmenu);
    }
   }

  }

