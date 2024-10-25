<script setup lang="ts">
import { ref } from 'vue';

const visible = ref(false);
const open = () => { visible.value = true }
</script>

<template>
  <div>
    <slot name="menu-button" :open>
      <button @click="open" type="button">
        <span class="pi pi-bars" style="font-size: 1.25rem"></span>
      </button>
    </slot>
    <Drawer v-model:visible="visible">
      <template #header>
        <div class="flex items-center gap-1 text-[--p-primary-color]">
          <MyIcon icon="logo" height="30" width="30" />
          <p class="text-2xl">Solfeggio</p>
        </div>
      </template>
      <div>
        
      </div>
    </Drawer>
  </div>
</template>