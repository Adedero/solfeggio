<script setup lang="ts">
import { useStore } from '@/stores/store';
const store = useStore();
</script>

<template>
  <ScoreMeasure v-for="measure in store.score." />
</template>