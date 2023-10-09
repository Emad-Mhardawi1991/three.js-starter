import * as THREE from 'three';
import Sizes from "./utils/sizes";
import Time from "./utils/time";
import Camera from './camera';
import Renderer from './renderer';



let experienceInstance = null;

export default class Experience 
{
  constructor(canvas) {

		
		if(experienceInstance) return experienceInstance;
		experienceInstance = this

    //global access
    window.experience = this;

		// options
		this.canvas = canvas;
		

		//setup
		this.sizes = new Sizes();
		this.time = new Time();
		this.scene = new THREE.Scene();
		this.camera = new Camera()
		this.renderer = new Renderer()

		

		/// Sizes resize event
		this.sizes.on('resize', ()=>this.resize())

		//Time Tick event
		this.time.on('tick', ()=>this.update())
  }


	resize(){
		// TO DO: changes to the scene when resize occurred tx: camera, 
		console.log('a resize occurred')
		this.camera.resize()
		this.renderer.resize()
	}



	update(){
		// To DO: make changes to the scene on each frame tx: animation
		console.log('ticking')
		this.camera.update()
		this.renderer.update()
	}

}
