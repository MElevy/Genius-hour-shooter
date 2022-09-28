const degToRad = (deg) => deg * (3.14 / 180);

const PLAYER_WIDTH = 190;
const PLAYER_HEIGHT = 150;

const BULLET_WIDTH = 75;
const BULLET_HEIGHT = 200;
const BULLET_ANCHOR = .5;
const BULLET_ROTATION = -90

class Player {
  constructor(container) {
    /* Player class
      * params:
        - container: PIXI.Container | PIXI.app "The parent container"
      * returns:
          null(is a constructor)
    */

    /* Create Sprite */
    this.body = PIXI.Sprite.from('assets/plane.png');

    /* Set attributes */
    this.body.width = PLAYER_WIDTH;
    this.body.height = PLAYER_HEIGHT;
    this.body.x = 640 - (190 / 2);
    this.body.y = 400;

    /* Add the player */
    container.addChild(this.body);
  } update(dt) {
    /* Update method(moves the character, etc...)
      * params:
        - dt: Number "The game's delta time"
      * returns:
          null
    */
  }
}

class Bullet {
  constructor(parent) {
    /* Bullet class
      * params:
        - parent: PIXI.Sprite "The entity shooting it"
      * returns:
        null(is a container)
    */
    this.body = PIXI.Sprite.from('assets/bullet.png');
    this.body.x = parent.x + (parent.width / 2);
    this.body.y = parent.y;
    this.body.width = BULLET_WIDTH;
    this.body.height = BULLET_HEIGHT;

  } update(dt) {}
}
