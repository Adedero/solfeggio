<script setup lang="ts">
import type { Measure } from '@/types/score.type';

interface Props {
  measure: Measure
}
defineProps<Props>();

</script>

<template>
  <div class="measure">
    <MeasurePart v-for="part in measure.parts" :key="part.partId" :measure :part />
  </div>
</template>
