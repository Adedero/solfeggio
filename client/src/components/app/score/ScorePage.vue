<script setup lang="ts">

interface Props {
  page: number
}

defineProps<Props>();


</script>


<template>
  <div class="w-full h-full relative">
    <div class="center-line z-[0] absolute h-full w-[1px] bg-blue-300 inset-0 m-auto"></div>
    <!-- <ScoreTitle /> -->
    <ScoreCreditText attribute="title" />
    <ScoreCreditText attribute="subtitle" />
    <ScoreCreditText attribute="composer" />
    <!-- <ScoreSubtitle /> -->
  </div>
</template>

<style>
.center-line {
  display: none;
}

.center-line.show {
  display: block;
}
</style>