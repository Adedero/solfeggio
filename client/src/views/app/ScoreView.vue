<script setup lang="ts">

</script>

<!-- <template>
  <div class="w-dvw h-[calc(100dvh-5rem)]">
    <PinchZoom ref="pinch">
      <div class="bg-blue-500 h-80 w-80"></div>
    </PinchZoom>
  </div>
</template> -->

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
        <PinchZoom ref="pinch">
          <div class="score-container w-full h-full">
            <ScoreItem />
          </div>
        </PinchZoom>
      </section>

      <!--  <section class="score-box flex-grow min-w-0 bg-slate-700 relative overflow-x-auto">
        <div class="score-container flex gap-4 p-10">
          <div class="score-page"></div>
          <div class="score-page"></div>
        </div>
      </section> -->

      <section class="w-fit h-full overflow-y-auto flex-shrink-0">
        <ScoreRightSidebar />
      </section>
    </div>
  </main>
</template>


<style scoped>
/* .score-container {
  position: absolute;
  top: 0;
  left: 0;
} */
.score-page {
  background-color: white;
  aspect-ratio: 8.3/11.7;
  width: 8.3in;
  flex-shrink: 0;
}
</style>