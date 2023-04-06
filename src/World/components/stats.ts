import Stats from 'three/examples/jsm/libs/stats.module.js';
import { ObjectWithTick } from './cube';

function createStats() {
  const stats = new Stats();
  (stats as ObjectWithTick<Stats>).tick = () => {
    stats.update();
  };
  return stats;
}

export { createStats };
