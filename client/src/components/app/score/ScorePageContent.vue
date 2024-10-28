<script setup lang="ts">
import { useStore } from '../../../stores/store';
const store = useStore();
</script>

<template>
  <div class="score-page-content">
    <ScoreMeasure
      v-for="measure in store.score.measures"
      :key="measure.number"
      :measure />
  </div>
</template>

<style scoped>
.score-page-content {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>