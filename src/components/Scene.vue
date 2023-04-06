<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { World } from '../World/World';

const sceneContainer = ref<HTMLElement | null>(null);

onMounted(async () => {
  if (sceneContainer.value) {
    const world = new World(sceneContainer.value);
    // world.render();
    await world.init();
    world.start();
  }
});
</script>

<template>
  <div id="scene" ref="sceneContainer" class="scene"></div>
</template>

<style scoped>
.scene {
  background-color: #fff;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
</style>
