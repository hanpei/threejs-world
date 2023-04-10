import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { createCamera } from './components/camera';
import { createScene } from './components/scene';
import { createRenderer } from './systems/renderer';
import { createCube } from './components/cube';
import { Resizer } from './systems/Resizer';
import { createLights } from './components/lights';
import { Loop, Ticker } from './systems/Loop';
import { createControls } from './systems/controls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { createAxesHelper, createGridHelper } from './components/helpers';
import { loadBirds } from './components/birds/birds';
import { createStats } from './components/stats';

class World {
  public container: HTMLElement;
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private controls: OrbitControls & Ticker;
  private loop: Loop;
  private stats: Stats & Ticker;

  constructor(container: HTMLElement) {
    this.container = container;
    this.camera = createCamera();
    this.scene = createScene();
    this.renderer = createRenderer();
    this.stats = createStats();

    this.controls = createControls(this.camera, this.renderer.domElement);
    this.loop = new Loop(this.camera, this.scene, this.renderer);
    container.appendChild(this.renderer.domElement);
    container.appendChild(this.stats.dom);

    const cube = createCube();
    const { ambientLight, mainLight } = createLights();
    this.loop.updatables.push(cube, this.controls, this.stats);
    // this.scene.add(cube, ambientLight, mainLight);
    this.scene.add(cube, ambientLight, mainLight);
    this.scene.add(createAxesHelper(10), createGridHelper());

    const resizer = new Resizer(container, this.camera, this.renderer);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    this.controls.target.copy(parrot.position);
    this.loop.updatables.push(parrot, flamingo, stork);
    this.camera.position.set(-30, 30, 30);
    this.scene.add(parrot, flamingo, stork);
  }

  start() {
    this.loop.start();
  }

  stop() {
    this.loop.stop();
  }
}

export { World };
