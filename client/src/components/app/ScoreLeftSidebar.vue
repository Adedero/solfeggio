<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Menu } from '@/types/solfiegge.types';

const items = ref({
  title: 'File',
  items: [
    {
      label: 'New',
      icon: 'pi pi-plus',
      shortcut: 'Crtl+N'
    },
    {
      label: 'Open',
      icon: 'pi pi-folder-open',
      shortcut: 'Crtl+O'
    },
    {
      label: 'Save',
      icon: 'pi pi-save',
      shortcut: 'Crtl+S',
      separator: true
    },
    {
      label: 'Print',
      icon: 'pi pi-print',
      shortcut: 'Crtl+P',
      separator: true
    },
    {
      label: 'Properties',
      icon: 'pi pi-box',
      separator: true
    },
    {
      label: 'Close',
      icon: 'pi pi-times-circle',
    }
  ]
});

const menu = ref();

const isOpen = ref(false);
const activeIndex = ref(0);
const showMenu = (index: number, menuItems : Menu) => {
  if (index === activeIndex.value) {
    menu.value.close();
    return;
  }
  menu.value.open(menuItems);
  activeIndex.value = index;
}

watch(isOpen, () => activeIndex.value = isOpen.value ? activeIndex.value : 0)
</script>

<template>
  <div class="w-full py-4 flex flex-col items-center gap-2">
    <MyMenu ref="menu" :menu="items" @close="isOpen = false" @open="isOpen = true" />
    <!--  <TieredMenu :model="items" /> -->
    <!-- <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" /> -->
    <button @click="showMenu(1, items)" class="sidebar-menu" :class="{ 'active': activeIndex === 1 }">
      <span class="pi pi-file" style="font-size: 1.5rem"></span>
      <p class="text-center text-xs font-medium">File</p>
    </button>

    <button @click="showMenu(2, items)" class="sidebar-menu" :class="{ 'active': activeIndex === 2 }">
      <span class="pi pi-file-edit" style="font-size: 1.5rem"></span>
      <p class="text-center text-xs font-medium">Edit</p>
    </button>

    <button @click="showMenu(3, items)" class="sidebar-menu" :class="{ 'active': activeIndex === 3 }">
      <span class="pi pi-search" style="font-size: 1.5rem"></span>
      <p class="text-center text-xs font-medium">View</p>
    </button>

    <button @click="showMenu(4, items)" class="sidebar-menu" :class="{ 'active': activeIndex === 4 }">
      <span class="pi pi-file-export" style="font-size: 1.5rem"></span>
      <p class="text-center text-xs font-medium">Export</p>
    </button>

    <button @click="showMenu(5, items)" class="sidebar-menu" :class="{ 'active': activeIndex === 5 }">
      <span class="pi pi-cog" style="font-size: 1.5rem"></span>
      <p class="text-center text-xs font-medium">Settings</p>
    </button>

    <button @click="showMenu(6, items)" class="sidebar-menu" :class="{ 'active': activeIndex === 6 }">
      <span class="pi pi-question-circle" style="font-size: 1.5rem"></span>
      <p class="text-center text-xs font-medium">Help</p>
    </button>
  </div>
</template>

<style scoped>
.sidebar-menu {
 /*  width: 100%;
  display: grid;
  gap: 0.25rem;
  padding: 0.5rem 0;
  color: var(--p-primary-50);
 */
  @apply w-full grid gap-1 py-2 text-[--p-primary-50] hover:text-white hover:bg-[--p-primary-400] hover:bg-opacity-10
}
.sidebar-menu.active {
  background-color: var(--p-primary-400);
  position: relative;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background-color: white;
  }
}
</style>