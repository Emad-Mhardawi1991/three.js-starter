import EventEmitter from "./eventEmitter";

export default class Time extends EventEmitter {
  constructor() 
  {
    super();

    this.start = Date.now();
    this.current = this.start
    this.elapsedTime = 0
    this.delta = 16

   
    window.requestAnimationFrame(()=>this.tick())
  }


  tick(){
    const currentTime = Date.now();
    const deltaTime = currentTime - this.current;
    this.current = currentTime;
    this.elapsedTime = this.current - this.start;
    this.trigger('tick')

    window.requestAnimationFrame(()=>{
        this.tick()
    })
  }
}
