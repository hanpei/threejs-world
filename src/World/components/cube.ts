import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  MeshStandardMaterialParameters,
} from 'three';

export type ObjectWithTick<T> = T & {
  tick?: (delta: number) => void;
};

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshStandardMaterial({ color: 'purple' });
  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);

  const radiansPerSecond = MathUtils.degToRad(30);

  (cube as ObjectWithTick<Mesh>).tick = (delta: number) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
