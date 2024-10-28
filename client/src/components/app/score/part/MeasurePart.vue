<script setup lang="ts">
import type { Measure, Part } from '@/types/score.type';

interface Props {
  measure: Measure;
  part: Part
}

defineProps<Props>();
</script>

<template>
  <div class="measure-part">
    <PartName :measure :part />

    <BarLine :measure type="left" />

    <div class="part-content-container">
      <SolfaNote v-for="note in part.notes" :key="note.noteId" :note />
    </div>

    <BarLine :measure type="right" />
  </div>
</template>

<style scoped>
.measure-part {
  display: flex;
}

.part-content-container {
  padding: 0 10px;
  display: flex;
}
</style>