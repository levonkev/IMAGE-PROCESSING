var gui;
var FlowB
var PartB
var input;
var img;




function mainmenu()
{
this.setup = function()
{
  gui = createGui();
  FlowB = createButton("FLOW FIELD", width /2.6, height /1.65, 75, 25);
  FlowB.setStyle({textSize: 10, fillLabel: color(170), rounding: 3, strokeWeight: 0, fillBg: color(31,32,41), fillBgActive: color(250), fillBgHover: color(200)});

  PartB = createButton("PARTICLES", width /1.85, height /1.65, 75, 25);
  PartB.setStyle({textSize: 10, fillLabel: color(170), rounding: 3, strokeWeight: 0, fillBg: color(31,32,41), fillBgActive: color(250), fillBgHover: color(200)});
  //Mainmenu();

  
  // input = createFileInput(this.handleFile);
  // input.position(0, 0);
  
 
}
this.draw = function()
{

  createCanvas(1000, 1000);
  background(31, 32, 41);
  textFont("Helvetica");
  textSize(20);
  stroke(0);
  fill(150);
  textAlign(CENTER, CENTER); 
 text(
    "IMAGE PROCESSING",
    width / 2,
    height / 2
  );
  textSize(12.5);
  text("Please SELECT from FLOWFIELD or PARTICLES", width / 2, height / 1.8);

  gui.draw();

  if (FlowB.isPressed)
  {
    this.sceneManager.showScene(projectg);
  }

  if (PartB.isPressed)
  {
    this.sceneManager.showScene(parti);
  }

  
//   this.handleFile = function() {
    
//     if (file.type === 'image') {
//       img = createImg(file.data, '');
//     //  img.hide();
//     } else {
//       img = null;
//     }
// }
//attempted to create input so users can upload their own image
}
}