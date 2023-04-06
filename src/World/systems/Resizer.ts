import { PerspectiveCamera, WebGLRenderer } from 'three';

class Resizer {
  constructor(
    container: HTMLElement,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    this.setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
      this.setSize(container, camera, renderer);
      this.onResize();
    });
  }

  private setSize(
    container: HTMLElement,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    // set the aspect ratio to match the new browser window aspect ratio
    const aspectRatio = container.clientWidth / container.clientHeight;
    camera.aspect = aspectRatio;

    // update the camera's frustum
    camera.updateProjectionMatrix();

    // update the size of the renderer AND the canvas
    renderer.setSize(container.clientWidth, container.clientHeight);

    // set the pixel ratio (for mobile devices)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  onResize() {
    // do something
  }
}

export { Resizer };
