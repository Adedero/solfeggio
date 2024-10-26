<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from '../../../stores/store';

const store = useStore();

const pages = computed(() => store.score.pages);

const pageStyle = computed(() => {
  const orientation = store.score.appearance.page_layout.orientation;
  let width: string = '0px';
  let height: string = '0px';

  if (orientation === 'portrait') {
    width = `${store.score.appearance.page_layout.width}px`;
    height = `${store.score.appearance.page_layout.height}px`;
  }
  if (orientation === 'landscape') {
    width = `${store.score.appearance.page_layout.height}px`;
    height = `${store.score.appearance.page_layout.width}px`;
  }

  const padding = {
    odd: `${store.score.appearance.page_layout.margins.odd_page_margin.top}px ${store.score.appearance.page_layout.margins.odd_page_margin.right}px ${store.score.appearance.page_layout.margins.odd_page_margin.bottom}px ${store.score.appearance.page_layout.margins.odd_page_margin.left}px`,
    even: `${store.score.appearance.page_layout.margins.even_page_margin.top}px ${store.score.appearance.page_layout.margins.even_page_margin.right}px ${store.score.appearance.page_layout.margins.even_page_margin.bottom}px ${store.score.appearance.page_layout.margins.even_page_margin.left}px`
  }
  
  return {
    size: {
      width,
      height,
    },
    padding
  }
})
</script>

<template>
  <div class="w-full h-full flex gap-4 p-10">
    <div v-for="page in pages" :key="page"
    :style="[
      pageStyle.size,
      page % 2 === 0 ? `padding: ${pageStyle.padding.even}` : `padding: ${pageStyle.padding.odd}`
    ]" 
    class="score-page">
     <ScorePage :page />
    </div>
  </div>
</template>


<style scoped>
.score-page {
  background-color: white;
  flex-shrink: 0;
}
</style>