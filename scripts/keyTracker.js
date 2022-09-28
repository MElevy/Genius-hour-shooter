class KeyTracker {
  constructor() {
    this.keysPressed = [];
    this.keyDownListeners = [];

    // window event listeners
    window.addEventListener('keydown', (e) => {
      if (e.isComposing || e.keyCode === 229) {
        return;
      }

      this.keysPressed[e.keyCode] = true;
      if (this.keyDownListeners[e.keyCode] === undefined) {
        this.keyDownListeners[e.keyCode] = [];
        return;
      }

      for (let keyDownListener of this.keyDownListeners[e.keyCode]) {
        keyDownListener();
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.isComposing || e.keyCode === 229) {
        return;
      }
      
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
