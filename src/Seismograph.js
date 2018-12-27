export class Seismograph {
  constructor({ minShakes, onShake, delay }) {
    if (typeof minShakes === "number") {
      this.minShakes = minShakes;
    } else {
      this.minShakes = 3;
    }
    if (typeof onShake === "function") {
      this.onShake = onShake;
    } else {
      this.onShake = () => {
        console.log("Shake it!");
      };
    }
    this.currentShakes = null;
    this.lastShake = Date.now();
    this.delay = delay || 0;
    this.previousX = null;
  }

  startRecording = () => {
    console.log("Starting to record!");
    window.addEventListener("devicemotion", this.onMotionEvent);
  };

  stopRecording = () => {
    console.log("Stopping to record!");
    window.removeEventListener("devicemotion", this.onMotionEvent);
  };

  onMotionEvent = event => {
    let x = null;

    if ("acceleration" in event) {
      x = event.acceleration.x;
    } else {
      x = event.accelerationIncludingGravity.x;
    }

    this.initValues(x);

    this.detectShake(x, this.previousX);
  };

  initValues = x => {
    if (!this.previousX) {
      this.previousX = x;
    }
  };

  detectShake = (current, previous) => {
    if (!this.belowTimeThreshold()) {
      return;
    }

    if (Math.abs(current) > 3 && Math.sign(current) !== Math.sign(previous)) {
      ++this.currentShakes;
    }

    previous = current;

    if (this.shakeThresholdReached()) {
      this.currentShakes = 0;
      this.lastShake = Date.now();
      this.onShake();
      return true;
    }
  };

  shakeThresholdReached = () => {
    return this.currentShakes > this.minShakes;
  };

  belowTimeThreshold = () => {
    return Date.now() - this.lastShake > this.delay;
  };
}
