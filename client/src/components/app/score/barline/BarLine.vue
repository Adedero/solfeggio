<script setup lang="ts">
import type { Measure } from '@/types/score.type';
import { computed } from 'vue';
interface Props {
  type: string;
  measure: Measure;
}
const { type } = defineProps<Props>();

const variable = computed(() => {
  return type === 'left' ? 'leftBarline' : 'rightBarline';
});
</script>

<template>
  <SwitchCase :case="measure[variable]">
    <SwitchCaseItem value="single">
      <SingleBarline />
    </SwitchCaseItem>

    <SwitchCaseItem value="double">
     <DoubleBarline />
    </SwitchCaseItem>

    <SwitchCaseItem value="end">
      <EndBarline />
    </SwitchCaseItem>

    <SwitchCaseItem value="repeat-left">
      <div class="repeat-left-line"></div>
    </SwitchCaseItem>

    <SwitchCaseItem value="double">
      <div class="repeat-right-line"></div>
    </SwitchCaseItem>

    <SwitchCaseItem value="double">
      <div class="repeat-both-line"></div>
    </SwitchCaseItem>

  </SwitchCase>
</template>

<style scoped>

</style>