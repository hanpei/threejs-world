import Stats from 'three/examples/jsm/libs/stats.module.js';
import { withTick } from '../systems/Loop';

function createStats() {
  const stats = new Stats();
  const tick = () => {
    stats.update();
  };
  return withTick(stats, { tick });
}

export { createStats };
