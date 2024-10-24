<script setup lang="ts">
import { provide } from 'vue';
interface Props {
  case: string | number | boolean;
}

const props = defineProps<Props>();

provide("switch-case", props.case);

</script>

<template>
  <slot></slot>
</template>