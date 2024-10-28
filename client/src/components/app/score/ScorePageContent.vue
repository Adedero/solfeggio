<script setup lang="ts">
import { useStore } from '@/stores/store';
const store = useStore();

</script>

<template>
  <div class="page-content">
    <div class="part-group-container">
      <ScorePart v-for="part in store.score.parts" :key="part.partId" />
    </div>
  </div>
</template>

<style scoped>
.page-content {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
