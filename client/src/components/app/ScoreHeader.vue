<script setup lang="ts">
import { ref } from 'vue';

const inputMode = ref('select');

const inputModes = ref([
  { id: 'select', value: 'select', 'label': 'S', icon: 'arrow_selector_tool', useIcon: true },
  { id: 'note-input', value: 'note', 'label': 'N', icon: 'edit_note' },
  { id: 'lyric-input', value: 'lyric', 'label': 'L', icon: 'lyrics' },
  { id: 'text-input', value: 'text', 'label': 'T', icon: 'title' }
])
</script>

<template>
  <header class="h-full px-5 flex items-center gap-8">
    <div class="flex items-center gap-2">
      <div v-for="mode in inputModes" :key="mode.id" class="w-8 h-8 overflow-hidden">
        <label :for="mode.id" class="text-lg cursor-pointer font-semibold border-2 border-[--p-primary-400] w-full h-full
        grid place-content-center p-2 rounded text-[--p-primary-400]"
          :class="{ 'bg-white text-[--p-primary-color]': inputMode === mode.value }">
          <i v-if="!mode.useIcon" class="material-icons-round">{{ mode.icon }}</i>
          <MyIcon v-if="mode.useIcon" icon="cursor" width="24" height="24" />
        </label>
        <input :id="mode.id" name="input-mode" :value="mode.value" type="radio" v-model="inputMode"
          class="input-mode hidden" />
      </div>
    </div>

    <div class="flex items-center gap-2">
      <Button class="h-8 w-8">
        <template #icon>
          <span class="material-icons-round">undo</span>
        </template>
      </Button>

      <Button class="h-8 w-8">
        <template #icon>
          <span class="material-icons-round">redo</span>
        </template>
      </Button>
    </div>

    <div class="flex items-center gap-2">
      <Button class="h-8 w-8">
        <template #icon>
          <span class="material-icons-round">zoom_in</span>
        </template>
      </Button>

      <Button class="h-8 w-8">
        <template #icon>
          <span class="material-icons-round">zoom_out</span>
        </template>
      </Button>
    </div>

    <div class="mx-auto text-sm font-semibold text-white max-w-[40%] truncate">
      <span class="pi pi-circle-fill -translate-y-1" style="font-size: 0.3rem"></span>
      <span> Title</span>
    </div>

    <div class="ml-auto flex items-center gap-2">
      <Button icon="pi pi-step-backward" class="h-8 w-8" />
      <Button icon="pi pi-play" class="h-8 w-8" />

      <div class="text-sm font-medium text-white flex items-center gap-2">
        <p>0:00:00:00</p>
        |
        <p>120BPM</p>
      </div>
    </div>
  </header>
</template>
