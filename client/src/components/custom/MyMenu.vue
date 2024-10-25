<script setup lang="ts">
import { ref } from 'vue';
import type { Menu } from '@/types/solfiegge.types';
import { onClickOutside } from '@vueuse/core';

const emit = defineEmits(['open', 'close']);


const visible = ref(false);
const menu = ref<Menu>()

defineExpose({
  toggle(menuItems: Menu) {
    if (visible.value) {
      visible.value = false;
      emit('close');
    } else {
      visible.value = true;
      menu.value = menuItems;
      emit('open')
    }
  },
  open(menuItems: Menu) {
    visible.value = true;
    menu.value = menuItems;
    emit('open')
  },
  close() {
    visible.value = false;
    emit('close')
  }
});

const el = ref();
onClickOutside(el, () => {
  visible.value = false;
  emit('close');
});


const handleClick = (item: Record<Menu["items"]>) => {
  if (item.command) {
    item.command();
  }
  visible.value = false;
  emit('close');
}

</script>

<template>
  <menu ref="el" :class="['my-menu border rounded-md shadow-md', visible ? 'open' : 'close']">
    <div v-if="menu">
      <h3 class="font-semibold">{{ menu.title ?? '' }}</h3>
      <div class="mt-2 text-sm font-medium grid gap-0.5">
        <div v-for="item in menu.items" :key="item.label" class="w-full">
          <button type="button" @click="handleClick(item)"
            class="w-full group flex justify-between items-center gap-2 py-1.5 px-2 rounded hover:bg-[--p-surface-100] transition-colors">
            <div class="flex items-center gap-2">
              <span v-if="item.icon" :class="[item.icon, 'text-slate-400 group-hover:text-slate-500']"></span>
              <span>{{ item.label ?? '' }}</span>
            </div>
            <p class="text-xs">{{ item.shortcut ?? ''}}</p>
          </button>
          <hr v-if="item.separator" class="my-1" />
        </div>
      </div>
    </div>
  </menu>
</template>

<style scoped>
.my-menu {
  position: fixed;
  z-index: 50;
  left: 4rem;
  top: 6rem;
  min-width: 14rem;
  max-height: calc(100dvh - 2.5rem);
  overflow-y: auto;
  color: var(--p-text-color);
  background-color: white;
  padding: 0.8rem;
}

.my-menu.close {
  visibility: hidden;
}

.my-menu.open {
  visibility: visible;
}
</style>