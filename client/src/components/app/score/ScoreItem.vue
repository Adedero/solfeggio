<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from '@/stores/store';
const store = useStore();

const pages = ref(1);

const pageStyle = computed(() => {
  return {
    width: store.score.appearance.page_layout.width,
    height: store.score.appearance.page_layout.height,
  }
})
</script>

<template>
  <div class="w-full h-full flex gap-4 p-10">
    <div v-for="page in pages" :key="page"  class="score-page">
     
    </div>

  </div>
</template>


<style scoped>
.score-page {
  background-color: white;
  flex-shrink: 0;
  width: 300;
  height: 300
}
</style>