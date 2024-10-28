<script setup lang="ts">
import { useStore } from '@/stores/store';
const store = useStore();


//Content will consist of 
//Measures, credits, and textBlocks
</script>

<template>
  <div class="page-content">
    <ScoreMeasure v-for="measure in store.score.measures" :key="measure.number" />
  </div>
</template>

<style scoped>
.page-content {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
