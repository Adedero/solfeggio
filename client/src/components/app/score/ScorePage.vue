<script setup lang="ts">

interface Props {
  page: number
}

defineProps<Props>();


</script>


<template>
  <div class="w-full h-full relative">
    <ScoreTitle />
    <ScoreSubtitle />
  </div>
</template>