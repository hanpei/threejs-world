import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ObjectWithTick } from '../components/cube';

function createControls(camera: PerspectiveCamera, canvas: HTMLElement) {
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  // controls.autoRotate = true;

  (controls as ObjectWithTick<OrbitControls>).tick = () => {
    controls.update();
  };
  return controls;
}

export { createControls };
