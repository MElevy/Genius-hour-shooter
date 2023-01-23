/* Setup */
const app = new PIXI.Application({
  width: 1280,
  height: 640,
  backgroundColor: 0xeeeeee // Light gray
}); // Create the app

const ASSET_FOLDER = '/Genius-hour-shooter/assets/';

const keyTracker = new KeyTracker();
const b = new Bump(PIXI);

/* Sprites */
const gameContainer = new PIXI.Container(); // Main container
app.stage.addChild(gameContainer);

const player = new Player(gameContainer);
const playerBullets = new BulletManager(gameContainer, player.body);
const enemyMgr = new EnemyManager(gameContainer);

const scoreLabel = new PIXI.Text('0');

scoreLabel.x = 10;
scoreLabel.y = 10;

gameContainer.addChild(scoreLabel)

// Game variables
let dt = 0;
let score = 0;
let planeSpeed = 1;

// Gameloop
app.ticker.add((delta) => {
  dt = delta;
  scoreLabel.text = `${score}`
  planeSpeed = (score / 5) + 1;

  if (Math.random() * 10 > 9.9) {
    enemyMgr.spawn();
  }

  player.update(dt);
  playerBullets.update(dt);
  enemyMgr.update(dt);
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
