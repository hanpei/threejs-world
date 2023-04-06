import { AmbientLight, DirectionalLight, HemisphereLight } from 'three';

function createLights() {
  const ambientLight = new HemisphereLight('white', 'darkslategray', 2);

  const mainLight = new DirectionalLight('white', 8);
  // move the light right, up, and towards us
  mainLight.position.set(10, 10, 10);

  return { ambientLight, mainLight };
}

export { createLights };
