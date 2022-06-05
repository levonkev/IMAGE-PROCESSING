var particles = [] ; //array of particles
var processing;
var img, c
var Menu;
var guip2; //odd gui var names because each unique type needs to be hidden when menu button is pressed
var Clearb;

function preload(){
img = loadImage('assets/example2.jpg'); 
  img.loadPixels();
  
}


function parti() {

  this.setup = function(){
    
    createCanvas(800,926);
    background(0);
    imageMode(CENTER);
   // img.resize(500, 0);
  angleMode(DEGREES);
  guip2 = createGui();
  Menu = createButton("MENU", width /1.125, height /10, 75, 25);
  Menu.setStyle({textSize: 10, fillLabel: color(170), rounding: 3, strokeWeight: 0, fillBg: color(100), fillBgActive: color(250), fillBgHover: color(200)});

  Clearb = createButton("CLEAR", width /1.125, height /7, 75, 25);
  Clearb.setStyle({textSize: 10, fillLabel: color(170), rounding: 3, strokeWeight: 0, fillBg: color(100), fillBgActive: color(250), fillBgHover: color(200)});
  Clearb.onRelease = this.onRelease;
  //buttons etc etc
  }

  this.onRelease = function(){
    background(0);
    //clear functionality - its poor, and isn't the correct -- i think, as in... I dont believe this is actually clearing the processing in the back-end
  }
  
  processing = new Particle;

   this.draw = function(){

    fill(150);
    stroke(0);
    text("Click to draw\nor hold mouse\ndown", width/1.125, height /15);
   
    if(mouseIsPressed)  {
      // spawn a new particle and add it to the array
      particles.push(new Particle(mouseX, mouseY, 5, 70)); 
    }
    // update and show the particles
    for(let i=particles.length-2; i>0; i--) {
      particles[i].update(particles);
      particles[i].show() ;
      if(particles[i].alpha<=2) particles.splice(i, 5); // remove the dead particle
    }

    guip2.draw();

    if (Menu.isPressed)
    {
      //hide gui, and colour background to menu shade.
      guip2.hide();
      background(31, 32, 41);
      this.sceneManager.showScene(mainmenu);
    }
  
    }

   

   }

  

