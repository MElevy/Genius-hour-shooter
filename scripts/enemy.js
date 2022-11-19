class EnemyManager {
  constructor(container) {
    /* EnemyManager class
      * params:
        - container: PIXI.Container "The container to put the enemy planes in"
      * returns:
        - null(is a constructor)
    */

    this.enemies = [];

    this.parent = container;

  } update(dt) {
    if (this.enemies.indexOf(null) !== -1 ||
      this.enemies.indexOf(undefined) !== -1) {
      this.enemies = this.enemies.filter(x =>
        x !== null && x !== undefined
      );
    }

    for (let enemy of this.enemies) {
      if (enemy === null || enemy === undefined)
        continue;
      enemy.update(this.enemies, dt);
    }
  } spawn() {
    this.enemies.push(new Enemy(this.parent, 0, 0));
  }
}

class Enemy extends Entity {
  constructor(container) {
    super(container);
    this.body.x = Math.random() * 1000, this.body.y = 0;
    this.body.rotation = degToRad(180);
    this.body.anchor.set(.5);
  } update(enemies, dt) {
    /* Update method(moves the character, etc...)
      * Meant to be called from an EnemyManager
      * params:
        - dt: Number "The game's delta time"
        - enemies: Array<Enemy> "The EnemyManager's active bullets"
      * returns:
          null
    */
    this.body.y += 1 * dt;

    for (bullet of bulletManager.bullets) {
      if (bullet.body.getBounds().instersects(this.body.getBounds())) {
        this.destruct();
        bullet.destruct();
      }
    }
    if (this.body.y > 640)
      this.destruct();
  } destruct() {
    this.container.removeChild(this.body);
    delete enemies[enemies.indexOf(this)];
    delete this.body;
    delete this;
  }
}
