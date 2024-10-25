<script setup lang="ts">
import { provide, ref } from 'vue';
interface Props {
  case: string | number | boolean;
}

const props = defineProps<Props>();

provide("switch-case", ref(props.case));

</script>

<template>
  <slot></slot>
</template>