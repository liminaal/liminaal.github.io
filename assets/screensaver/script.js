var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/* global createCanvas background windowWidth windowHeight strokeWeight key fullscreen randomPalette floor frameCount noise p5 random TWO_PI createVector stroke line getPalette noStroke fill rect resizeCanvas */

const size = 10;
let tracers = [];
const NUM_POINTS = 2000;
let frameRateElement;
const NOISE_K = 500;
const MAX_SPEED = 4;
let palette;

function getVector(x,y){
  let xi = floor(x/size);
  let yi = floor(y/size);
  let n = noise(xi/10, yi/10, frameCount/NOISE_K);
  let v = p5.Vector.fromAngle(n * TWO_PI * 4);
  return v;
}

class Tracer{
  constructor(){
    this.location = createVector(random(windowWidth), random(windowHeight));
    this.prev = this.location.copy();
    this.velocity = p5.Vector.fromAngle(random(TWO_PI));
    this.ci = floor(random(0,5));
  }
  
  move(){
    this.prev = this.location.copy();
    this.velocity.add(getVector(this.location.x, this.location.y));
    this.velocity.limit(MAX_SPEED);
    this.location.add(this.velocity);
    this.wrap();
  }
  
  wrap(){
    let wrapped = false;
    if (this.location.x < 0){ 
      this.location.x += windowWidth;
      wrapped = true;
    }else if (this.location.x >= windowWidth){ 
      this.location.x -= windowWidth; 
      wrapped = true;
    }
    if (this.location.y < 0){ 
      this.location.y +=  windowHeight; 
      wrapped = true;
    }else if (this.location.y >= windowHeight){ 
      this.location.y -= windowHeight; 
      wrapped = true;
    }
    this.wrapped = wrapped;
  }
  
  draw(){
    if (this.wrapped){
      this.wrapped = false;
      return;
    }
    stroke(palette[this.ci]);
    line(this.prev.x, this.prev.y, this.location.x, this.location.y);
  }
}

function reset(){
  background(0);
  palette = getPalette();
  tracers = [];
  for (let i = 0; i < NUM_POINTS; i++){
    tracers.push(new Tracer());
  }
}

function drawPalette(){
  noStroke();
  for (let i = 0; i < 5; i++){
    fill(palette[i]);
    rect(20, 20 * i + 20, 20, 10);
  }
}

// let canvas;

function setup(){
  createCanvas(windowWidth, windowHeight);
  // canvas = createCanvas(760, 230);
  strokeWeight(0.2);
  reset();
  // console.log(_colorMaxes);
}

function draw(){
  tracers.forEach(t => {
    t.move();
    t.draw();
  });
  // drawPalette();
  if (frameCount % (30*30) === 0){
    // save('pftfoi-javascript.png');
    reset();
  }
}

function keyPressed(){
  if (key === "f"){
    fullscreen(!fullscreen());
  }
}

function windowResized(){
   resizeCanvas(windowWidth, windowHeight);
  background(0);
}
}
/*
     FILE ARCHIVED ON 19:52:46 Feb 19, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:04:49 Nov 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.29
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.016
  esindex: 0.009
  cdx.remote: 16.367
  LoadShardBlock: 164.828 (3)
  PetaboxLoader3.datanode: 205.071 (5)
  load_resource: 148.652
  PetaboxLoader3.resolve: 85.261
  loaddict: 26.691
*/
