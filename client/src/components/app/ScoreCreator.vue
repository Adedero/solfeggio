<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
const open = () => { visible.value = true }
</script>

<template>
  <div>
    <slot name="default" :open>
      <Button @click="open" label="New score" icon="pi pi-plus" size="small" />
    </slot>
    <Dialog v-model:visible="visible">

    </Dialog>
  </div>
</template>