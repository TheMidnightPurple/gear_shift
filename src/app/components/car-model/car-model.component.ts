import { Component, Input } from '@angular/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three';
import { Car } from '../../interfaces/car';

@Component({
  selector: 'app-car-model',
  standalone: true,
  imports: [],
  templateUrl: './car-model.component.html',
  styleUrl: './car-model.component.scss'
})
export class CarModelComponent {
  @Input()
  car: Car | undefined = undefined

  ngOnInit(): void {
    this.createModel()
  }

  getBrandLogo(): string {
    return "../../../../assets/cars/" + this.car?.brand + "/logo.png";
  }

  getModelPath(): string {
    return "../../../../assets/cars/" + this.car?.brand + "/" + this.car?.year + "/" + this.car?.model + "/" + this.car?.colorName + ".glb";
  }

  createModel(): void {
    let canvas = document.getElementById('canvas-box')
    const scene = new THREE.Scene();

    const canvasSizes = {
      width: window.innerWidth / 1.2,
      height: window.innerHeight / 1.2
    }

    //Camera
    const camera = new THREE.PerspectiveCamera(
      23,
      canvasSizes.width / canvasSizes.height,
      0.3,
      2000
    )
    camera.position.z = -130
    camera.position.y = 0
    scene.add(camera)

    //Loading Manager
    const loadingManager = new THREE.LoadingManager();
    let progressBar: any = document.getElementById('progress-bar');
    
    loadingManager.onProgress = function(_, loaded, total) {
      progressBar.value = (loaded / total) * 100;
    }
      
    let progressBarContainer: any = document.getElementById('loading-container');

    loadingManager.onLoad = function() {
      setTimeout(() => {
        progressBarContainer.style.display = "none";
        if (canvas) canvas.style.display = "flex";
      }, 2500)
    }

    loadingManager.onError = function(url) {
      console.log("Error loading: " + url)
    }

    //Environment
    new RGBELoader(loadingManager).load(
      "../../../assets/studio_small_08_4k.hdr", function (texture) {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.environment = texture
      }
    )

    //Objects Loader
    //Car
    const car = new GLTFLoader(loadingManager);
    car.load(
      this.getModelPath(),
      (glb: any) => {
        let obj = glb.scene; 
        obj.scale.set(10, 10, 10)
        obj.position.y = -1;
        scene.add(obj);
      },
      (xhr: any) => {
        let loaded = (xhr.loaded / xhr.total) * 100
        //console.log(loaded + '% loaded')
      },
      (error: any) => {
        console.log(error)
      } 
    )

    //Base
    const base = new GLTFLoader(loadingManager);
    base.load(
      '../../../assets/support.glb',
      (glb: any) => {
        let obj = glb.scene;
        obj.scale.set(10, 10, 10);
        obj.position.y = -1;
        scene.add(obj);
      },
      (xhr: any) => {
        let loaded = (xhr.loaded / xhr.total) * 100
        //console.log(loaded + '% loaded')
      },
      (error: any) => {
        console.log(error)
      } 
    )

    //Error handling
    if (!canvas) return;

    //Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas: canvas,
      antialias: true,
      powerPreference: "high-performance"
    })

    renderer.setClearColor(0x000000, 0);
    renderer.setSize(canvasSizes.width, canvasSizes.height);

    //Resize Events
    window.addEventListener('resize', () => {
      canvasSizes.width = window.innerWidth / 2;
      canvasSizes.height = window.innerHeight / 2;
      
      camera.aspect = canvasSizes.width / canvasSizes.height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(canvasSizes.width, canvasSizes.height);
      renderer.render(scene, camera) 
    })

    //Controls
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.update();
    controls.autoRotate = true
    controls.autoRotateSpeed = 4
    controls.enablePan = false;
    controls.enableZoom = false
    controls.minPolarAngle = 1.3;
    controls.maxPolarAngle = 1.3;

    //Animate Scene
    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(scene, camera);   
    })
  }
}
