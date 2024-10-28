<script setup lang="ts">
import type { Measure, Part } from '@/types/score.type';
import { computed, type CSSProperties } from 'vue';
import { useStore } from '@/stores/store';

interface Props {
  measure: Measure;
  part: Part
}
defineProps<Props>();

const store = useStore();

const style = computed((): CSSProperties => {
  return {
    fontSize: `${store.score.fonts.generalTextFont.fontSize}px`,
    fontFamily: store.score.fonts.generalTextFont.fontFamily,
    color: store.score.fonts.generalTextFont.color
  }
})
</script>

<template>
  <div class="part-name-container" v-if="measure.newSystem">
    <p :style class="part-name focus-item" v-if="measure.number === 1">{{ part.partName }}</p>
    <p :style class="part-name focus-item" v-else>{{ part.partAbbreviation }}</p>
  </div>
</template>

<style scoped>
.part-name-container {
  margin-right: 5px;
}

.part-name {
  cursor: context-menu;
  user-select: none;
}
</style>