import * as THREE from 'three'
import Experience from "./experience"
import Sizes from "./utils/sizes"
import {OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera{
    constructor( ){
        this.experience = new Experience()
        this.sizes = new Sizes()
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.setInstance()
        this.setOrbitControls()
        
     
        
    }


    /// create camera instance
    setInstance(){
        this.instance = new THREE.PerspectiveCamera(45, this.sizes.width / this.sizes.height, 1, 100)
        
        /// move the camera  
        this.instance.position.set(6,4,8 )
        this.scene.add(this.instance)
        
    }


    setOrbitControls(){
        this.orbitControls = new OrbitControls(this.instance , this.canvas)
        this.orbitControls.enableDamping = true
    }


    resize(){
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix()
    }

    update(){
       this.orbitControls.update() 
    }
}