import { AnimationMixer, Object3D } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { ObjectWithTick } from '../cube';

function setupModel(data: GLTF) {
  const model = data.scene.children[0];

  const clip = data.animations[0];

  const mixer = new AnimationMixer(model);
  const action = mixer.clipAction(clip);
  action.play();

  (model as ObjectWithTick<Object3D>).tick = (delta: number) =>
    mixer.update(delta);

  return model;
}

export { setupModel };
