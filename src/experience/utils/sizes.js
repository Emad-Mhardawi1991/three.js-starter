import EventEmitter from "./eventEmitter";

export default class Sizes extends EventEmitter {
  constructor() {
		super()
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    /// Resize event
		this.resize()
  }

  resize() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);
			this.trigger('resize')
    });
  }
}
