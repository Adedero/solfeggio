<script setup lang="ts">
import type { Measure } from '@/types/score.type';
import { useStore } from '@/stores/store';

interface Props {
  measure: Measure
}
defineProps<Props>();

const store = useStore();
</script>

<template>
  <div class="measure">
    
  </div>
</template>
