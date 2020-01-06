let spritesheet;
let spritedata;

let animation = [];


function preload() {
  spritedata = loadJSON('horse/star.json');
  spritesheet = loadImage('horse/starsheet.jpg');

  // spritedata2 = loadJSON('horse/map3.json');
  // spritesheet2 = loadImage('horse/mapsheet3.jpg');
  //
  // spritedata3 = loadJSON('horse/drivepos.json');
  // spritesheet3 = loadImage('horse/drive.jpg');
  //
  // spritedata4 = loadJSON('horse/sunsetcarpos.json');
  // spritesheet4 = loadImage('horse/sunsetcar.jpg');
}


function setup() {
  createCanvas(200, 200);
  background('white');
  let frames = spritedata.frames;
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
  // frames = spritedata2.frames;
  // for (let i = 0; i < frames.length; i++) {
  //   let pos = frames[i].position;
  //   let img = spritesheet2.get(pos.x, pos.y, pos.w, pos.h);
  //   animation.push(img);
  // }
  // frames = spritedata3.frames;
  // for (let i = 0; i < frames.length; i++) {
  //   let pos = frames[i].position;
  //   let img = spritesheet3.get(pos.x, pos.y, pos.w, pos.h);
  //   animation.push(img);
  // }
  // frames = spritedata4.frames;
  // for (let i = 0; i < frames.length; i++) {
  //   let pos = frames[i].position;
  //   let img = spritesheet4.get(pos.x, pos.y, pos.w, pos.h);
  //   animation.push(img);
  // }
  horse = new Sprite(animation, 0, 0, 0.2);

}

function draw() {
  background(0);


  horse.show();
  horse.animate();
  fill(250);
  noStroke();
  //rect(0, 0, 20, 100);

  // image(animation[frameCount % animation.length], 0, 0);
}
