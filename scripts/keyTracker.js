class KeyTracker {
  constructor() {
    this.keysPressed = [];
    this.keyDownListeners = [];

    // window event listeners
    window.addEventListener('keydown', (e) => {
      this.keysPressed[e.keyCode] = true;
      if (this.keyDownListeners[e.keyCode] === undefined) {
        this.keyDownListeners[e.keyCode] = [];
        return;
      }
      console.log(e.keyCode);

      for (let keyDownListener of this.keyDownListeners[e.keyCode]) {
        keyDownListener();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keysPressed[e.keyCode] = false;
    });
  } addKeyListener(keyCode, fn, interval = 1 / 60) {
    return setInterval(() => {
      if (this.keysPressed[keyCode] === true) {
        fn();
      }
    }, interval);
  } addKeyDownListener(keyCode, fn, interval = 1 / 60) {
    if (this.keyDownListeners[keyCode] === undefined) {
      this.keyDownListeners[keyCode] = [];
    }
    this.keyDownListeners[keyCode].push(fn);
  }
}
