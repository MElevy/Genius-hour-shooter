class EnemyManager {
  constructor(container) {
    /* EnemyManager class
      * params:
        - container: PIXI.Container "The container to put the enemy planes in"
      * returns:
        - null(is a constructor)
    */

    this.enemies = [];

    this.parent = parent;

  } update(dt) {
    if (this.bullets.indexOf(null) !== -1
      && this.bullets.indexOf(undefined) !== -1) {
      this.bullets = this.bullets.filter(x =>
        x !== null && x !== undefined
      );
    }

    for (enemy of this.enemies) {
      enemy.update(dt);
    }
  }
}

class Enemy extends Entity {
  update(dt) {
    /* Update method(moves the character, etc...)
      * Meant to be called from an EnemyManager
      * params:
        - dt: Number "The game's delta time"
        - enemies: Array<Enemy> "The EnemyManager's active bullets"
      * returns:
          null
    */
  }
}
