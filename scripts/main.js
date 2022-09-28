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

const player = new Player(gameContainer);
const playerBullets = new BulletManager(player);

// Game variables
let dt = 0;

// Gameloop
app.ticker.add((delta) => {
  dt = delta;

  player.update(dt);

});

// Key presses
keyTracker.addKeyListener(65, () => {
  player.body.x -= 3 * dt;
});

keyTracker.addKeyListener(68, () => {
  player.body.x += 3 * dt
})

keyTracker.addKeyDownListener(32, () => {
  playerBullets.shoot();
})

// Game start
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(app.view);
});
