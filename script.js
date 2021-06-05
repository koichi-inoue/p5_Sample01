function setup() {
  // CANVASオブジェクトを取得
  var cv = createCanvas(800, 600);
  // CANVASの親要素として myCanvas を指定
  cv.parent("container");

  colorMode(RGB);
  frameRate(60);
}

function draw() {

  fill(0,128,128);
  rect(0,0,width,height);

  let step = 40;
  let r = 400*mouseX/width;
  noFill();

  for( var y=step/2; y<height; y+=step ){
    for( var x=step/2; x<width; x+=step ){
      stroke(255,255,255);
      ellipse(x,y,r,r);
    }
  }

}
