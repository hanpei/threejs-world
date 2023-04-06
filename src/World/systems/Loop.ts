import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

export interface Ticker {
  tick: (delta: number) => void;
}

export function withTick<T extends object>(
  object: T,
  ticker: Ticker
): T & Ticker {
  return Object.assign(object, { tick: ticker.tick });
}

class Loop {
  private camera: PerspectiveCamera;
  private scene: Scene;
  private renderer: WebGLRenderer;
  private clock: Clock;
  public updatables: Ticker[];

  constructor(
    camera: PerspectiveCamera,
    scene: Scene,
    renderer: WebGLRenderer
  ) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
    this.clock = new Clock();
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  add(object: Ticker) {
    this.updatables.push(object);
  }

  remove(object: Ticker) {
    const index = this.updatables.indexOf(object);
    if (index !== -1) {
      this.updatables.splice(index, 1);
    }
  }

  tick() {
    const delta = this.clock.getDelta();

    for (const object of this.updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
