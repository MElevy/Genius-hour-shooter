/* Setup */
const app = new PIXI.Application({
  width: 1280,
  height: 640,
  backgroundColor: 0xeeeeee // Light gray
}); // Create the app

const keyTracker = new KeyTracker();

/* Sprites */
const gameContainer = new PIXI.Container(); // Main container
app.stage.addChild(gameContainer);

const player = new Player();
const createPlayerBullet = () => {
  /*
    * Obsolete
    * - TODO: Remove
  */
  let bullet = PIXI.Sprite.fromImage('assets/bullet.png');
  bullet.x = player.x;
  bullet.y = player.y;
  bullet.width = 75;
  bullet.height = 200;

  bullet.anchor.set(.5);
  bullet.rotation = -90 * (3.14 / 180);

  return bullet;
}

// Game variables
let dt = 0;

// Gameloop
app.ticker.add((delta) => {
  dt = delta;

  if (player.x + 170 < 0) {
    player.x = 1280;
  }
});

// Key presses
keyTracker.addKeyListener(65, () => {
  player.body.x -= 3 * dt;
});

keyTracker.addKeyListener(68, () => {
  player.body.x += 3 * dt
})

keyTracker.addKeyDownListener(32, () => {
  let bullet = createPlayerBullet();
  gameContainer.addChild(bullet);
})

// Game start
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(app.view);
});
