<script setup lang="ts">
import { computed, type CSSProperties } from 'vue';
import { useStore } from '../../../../stores/store';
const store = useStore();

const pageStyles = computed(() : CSSProperties => {
  return {
    width:  `${store.score.page.width}px`,
    height: `${store.score.page.height}px`,
    paddingTop: `${store.score.page.margins.top}px`,
    paddingRight: `${store.score.page.margins.right}px`,
    paddingBottom: `${store.score.page.margins.bottom}px`,
    paddingLeft: `${store.score.page.margins.left}px`,
    backgroundColor: store.score.page.color || 'white'
  }
});
</script>


<template>
  <div :style="pageStyles">
    <CenterLine />
    <div class="score-page-content">
      <!-- Measures, Text Blocks and Credits -->
      <div class="measure-container">
        <ScoreMeasure v-for="measure in store.score.measures" :key="measure.number" :measure />
      </div>
    </div>
  </div>
</template>

<style scoped>
.score-page-content {
  width: 100%;
  height: 100%;
  position: relative;
}

.measure-container {
  display: flex;
}
</style>

