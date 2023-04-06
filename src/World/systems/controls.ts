import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { withTick } from './Loop';

function createControls(camera: PerspectiveCamera, canvas: HTMLElement) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  // controls.autoRotate = true;

  const tick = () => {
    controls.update();
  };
  return withTick(controls, { tick });
}

export { createControls };
