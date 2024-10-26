<script setup lang="ts">
import { useStore } from '@/stores/store';

const store = useStore();

const handleScaleUpdate = (scale: { scale: number, translateX: number, translateY: number}) => {
  store.workspace = scale;
}
</script>

<template>
  <main class="h-[calc(100dvh-2.5rem)]">
    <section class="w-full h-12 bg-[--p-primary-700]">
      <ScoreHeader />
    </section>

    <div class="h-[calc(100%-3rem)] flex">
      <section class="w-16 h-full flex-shrink-0 overflow-y-auto bg-[--p-primary-color] text-white">
        <ScoreLeftSidebar />
      </section>

      <section class="flex-grow min-w-0 bg-slate-700">
        <PinchZoom @update:scale="handleScaleUpdate" ref="pinch">
          <div class="score-container w-full h-full">
            <ScoreItem />
          </div>
        </PinchZoom>
      </section>

      <section class="w-fit h-full overflow-y-auto flex-shrink-0">
        <ScoreRightSidebar />
      </section>
    </div>
  </main>
</template>