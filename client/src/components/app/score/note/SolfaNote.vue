<script setup lang="ts">
import type { Note } from '@/types/score.type';
import { computed } from 'vue';
import { useStore } from '@/stores/store';
import generateNote from '@/utils/generate-note';

interface Props {
  note: Note
};
defineProps<Props>();

const store = useStore();

const noteStyle = computed(() => {
  return {
    fontFamily: store.score.fonts.noteFont.fontFamily,
    fontSize: `${store.score.fonts.noteFont.fontSize}px`,
    color: store.score.fonts.noteFont.color
  }
});

const lyricStyle = computed(() => {
  return {
    fontFamily: store.score.fonts.lyricFont.fontFamily,
    fontSize: `${store.score.fonts.lyricFont.fontSize}px`,
    color: store.score.fonts.lyricFont.color
  }
})
</script>

<template>
  <div class="note-lyric-container">
    <div :style="noteStyle" class="note">
      {{ generateNote(note).solfa }}
    </div>
    <div :style="lyricStyle" class="lyric">
      {{ note.lyric?.text }}
    </div>
  </div>
</template>

<style scoped>
.note-lyric-container {
  display: grid;
  flex-direction: column;
  row-gap: 3px;
  align-items: center;
  justify-content: center;
  padding: 0 2px;
}
</style>