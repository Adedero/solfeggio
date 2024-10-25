<script setup lang="ts">
import { useZoomControl } from '@/composables/use-zoom-control';
import { onMounted, reactive, ref } from 'vue';
import PinchScrollZoom, {
  type PinchScrollZoomEmitData,
  type PinchScrollZoomExposed
} from '@coddicat/vue-pinch-scroll-zoom';

import PinchZoom from 'pinch-zoom-js';

const scale = ref(1);

const state = reactive({});

const zoomer = ref<PinchScrollZoomExposed>();

function onEvent(name: string, e: PinchScrollZoomEmitData): void {
  state.eventName = name;
  state.eventData = e;
  state.scale = e.scale;
  state.originX = e.originX;
  state.originY = e.originY;
  state.translateX = e.translateX;
  state.translateY = e.translateY;
}

function reset(): void {
  zoomer.value?.setData({
    scale: 1,
    originX: 150,
    originY: 200,
    translateX: -100,
    translateY: -50
  });
}



onMounted(() => {
  const score_box: HTMLDivElement | null = document.querySelector('.score-box');
  if (score_box) {
    const pz = new PinchZoom(score_box);
    console.log(pz)
    pz.enable()
  }

  

  //useZoomControl(score_box, '.score-container')

  /* if (score_box) {
    const el : HTMLDivElement | null = document.querySelector('.score-container');
  
    score_box.addEventListener('wheel', (event) => {
     event.preventDefault();
     console.log(event)
      if (Math.abs(event.deltaY) > 25) {
        return;
      }
      if (el) {
        scale.value += event.deltaY * -0.01;

        // Restrict scale
        scale.value = Math.min(Math.max(0.125, scale.value), 4);

        // Apply scale transform
        el.style.scale = `${scale.value}`;
      }
    })
  } */
})
</script>

<template>
  <main class="h-[calc(100dvh-2.5rem)]">
    <section class="w-full h-12 bg-[--p-primary-700]">
      <ScoreHeader />
    </section>

    <div class="h-[calc(100%-3rem)] flex">
      <section class="w-16 h-full overflow-y-auto bg-[--p-primary-color] text-white">
        <ScoreLeftSidebar />
      </section>

      <PinchScrollZoom ref="zoomer" within centered key-actions :width="300" :height="400" :min-scale="0.3"
        :max-scale="6" @scaling="e => onEvent('scaling', e)" @startDrag="e => onEvent('startDrag', e)"
        @stopDrag="e => onEvent('stopDrag', e)" @dragging="e => onEvent('dragging', e)" style="border: 1px solid black"
        :content-width="500" :content-height="500">
        <img src="https://picsum.photos/500/500" width="500" height="500" />
      </PinchScrollZoom>

      <section class="score-box w-[500px] flex-grow min-w-0 bg-slate-700 relative overflow-x-auto">
        <div class="score-container flex gap-4 p-10">
          <div class="score-page"></div>
          <div class="score-page"></div>
        </div>
      </section>

      <section class="w-fit h-full overflow-y-auto flex-shrink-0">
        <ScoreRightSidebar />
      </section>
    </div>
  </main>
</template>

<style scoped>
.score-container {
  position: absolute;
  top: 0;
  left: 0;
}
.score-page {
  background-color: white;
  aspect-ratio: 8.3/11.7;
  width: 8.3in;
  flex-shrink: 0;
}
</style>