let move = 0;
let pg;

let fr;


function setup() {
  createCanvas(350, 350);
  pg = createGraphics(350, 350);

  console.log(noise(12));
  console.log(sin(0));

  fr = createP('');
}

function draw() {
  background(0);

  pg.background(0);
  pg.fill(255);
  pg.textSize(100);
  pg.push();
  pg.translate(width / 2, height / 2);
  pg.textAlign(CENTER, CENTER);
  pg.text("All Play", 0, 0);
  pg.pop();

  image(pg, 0, 0);

  const scale = 10;

  const tileW = floor(width / scale);
  const tileH = floor(height / scale);

  for (x = 0; x < scale; x++) {
    for (y = 0; y < scale; y++) {

      const wave = floor(sin(frameCount * 0.35 + (x * y) * 0.07) * 20);

      //source
      const sx = x * tileW + wave;
      const sy = y * tileH + wave;
      const sw = tileW;
      const sh = tileH;

      //destination
      const dx = x * tileW;
      const dy = y * tileH;
      const dw = tileW;
      const dh = tileH;


      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }

  fr.html(floor(frameRate()));


}
