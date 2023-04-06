import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import parrotModel from '../../../assets/models/Parrot.glb?url';
import flamingoModel from '../../../assets/models/Flamingo.glb?url';
import storkModel from '../../../assets/models/Stork.glb?url';
import { setupModel } from './setupModel';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData, flamingoData, storkData] = await Promise.all([
    await loader.loadAsync(parrotModel),
    await loader.loadAsync(flamingoModel),
    await loader.loadAsync(storkModel),
  ]);

  const parrot = setupModel(parrotData);
  parrot.position.set(0, 0, 2.5);

  const flamingo = setupModel(flamingoData);
  flamingo.position.set(7.5, 0, -10);

  const stork = setupModel(storkData);
  stork.position.set(0, -2.5, -10);

  return { parrot, flamingo, stork };
}

export { loadBirds };
