<script setup lang="ts">
import { useStore } from '../../../stores/store';

const store = useStore();

</script>

<template>
  <div class="w-full h-full flex gap-4 p-10">
    <ScorePage v-for="page in store.workspace.pages" :key="page" class="page-section" />
  </div>
</template>
