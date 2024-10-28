<script setup lang="ts">
import { computed, CSSProperties } from 'vue';
import { useStore } from '../../../stores/store';
const store = useStore();

const pageStyles = computed(() : CSSProperties => {
  return {
    width:  `${store.score.page.width}px`,
    height: `${store.score.page.height}px`,
    paddingTop: `${store.score.page.margins.top}px`,
    paddingRight: `${store.score.page.margins.right}px`,
    paddingBottom: `${store.score.page.margins.bottom}px`,
    paddingLeft: `${store.score.page.margins.left}px`,
    backgroundColor: 'white'
  }
});
</script>


<template>
  <div :style="pageStyles">
    <CenterLine />
    <ScorePageContent />
  </div>
</template>

