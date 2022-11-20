const degToRad = (deg) => deg * (3.14 / 180);

const PLAYER_WIDTH = 190;
const PLAYER_HEIGHT = 150;

const BULLET_WIDTH = 50;
const BULLET_HEIGHT = 125;
const BULLET_ANCHOR = .5;
const BULLET_ROTATION = degToRad(-90);

class Entity {
  constructor(container) {
    /* Entity class
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
    this.container = container;
    this.container.addChild(this.body);
  } update(dt) {
    /* Update method(moves the character, etc...)
      * params:
        - dt: Number "The game's delta time"
      * returns:
          null
    */
  }
}

class BulletManager {
  constructor(container, parent) {
    /* BulletManager class
      * params:
        - container: PIXI.Container "The container to put the bullets in"
        - parent: PIXI.Sprite "The entity that shoots the bullets"
      * returns:
        - null(is a constructor)
    */

    this.bullets = [];

    this.parent = parent;
    this.container = container;

  } update(dt) {
    if (this.bullets.indexOf(null) !== -1 ||
        this.bullets.indexOf(undefined) !== -1)
      this.bullets = this.bullets.filter(x => (
        x !== null && x !== undefined
      ));

    for (let bullet of this.bullets) {
      if (bullet === null || bullet === undefined)
        continue;
      bullet.update(dt, this.bullets);
    }
  } shoot() {
    this.bullets.push(new Bullet(this.container, this.parent));
  }
}

class Bullet {
  constructor(container, parent) {
    /* Bullet class
      * params:
        - container: PIXI.Container "The parent container"
        - parent: PIXI.Sprite "The entity shooting it"
      * returns:
        null(is a constructor)
    */

    this.body = PIXI.Sprite.from('assets/bullet.png');
    this.body.x = parent.x + (parent.width / 2);
    this.body.y = parent.y;
    this.body.width = BULLET_WIDTH;
    this.body.height = BULLET_HEIGHT;

    this.body.rotation = BULLET_ROTATION;
    this.body.anchor.set(BULLET_ANCHOR);

    container.addChild(this.body)

    this.parent = parent;
    this.container = container;

  } update(dt, bullets) {
    /* The update method
      * Meant to be called from a bullet manager
      * params:
        - dt: Number "The game's delta time"
        - bullets: Array<Bullet> "Bullet manager's active bullets"
    */
    this.body.y -= 10 * dt;
    if (this.body.y < 0) {
      this.destruct(bullets);
    }
  } destruct(bullets) {
    this.container.removeChild(this.body);
    delete bullets[bullets.indexOf(this)];
    delete this.body;
    delete this;
  }
}
