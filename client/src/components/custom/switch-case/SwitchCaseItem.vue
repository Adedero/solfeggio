<script setup lang="ts">
import { computed, inject } from 'vue';
interface Props {
  value: string | number | boolean;
}
const props = defineProps<Props>();

const switchCase = inject("switch-case");

const isMatched = computed(() => props.value === switchCase);
</script>

<template>
  <div v-if="isMatched">
    <slot />
  </div>
</template>