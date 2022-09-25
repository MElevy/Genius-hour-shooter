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
    this.body.width = 190;
    this.body.height = 150;
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
  } update(dt) {}
}
