<script setup lang="ts">
import { computed, ref } from 'vue';
import type { CSSProperties } from 'vue';
import type { TextStyle } from '../../../../types/text.types';
import { useStore } from '../../../../stores/store';
import useDraggable from '@/composables/use-draggable';

interface Props {
  attribute: string;
}

defineProps<Props>();

const store = useStore();

const scoreTitleEl = ref<HTMLElement | null>(null);

const { x, y } = useDraggable(scoreTitleEl,
  {
    initialValue: {
      x: store.score.credits.title.default_x,
      y: store.score.credits.title.default_y,
    },
    centerVertically: true,
    onDragEnd: (newX: number, newY: number) => {
      store.score.credits.title = {
        ...store.score.credits.title,
        default_x: newX,
        default_y: newY
      }
    }
  }
);

const titleStyles = computed(() : CSSProperties => {
  return {
    position: 'absolute',
    fontFamily: store.score.credits.title.font,
    fontWeight: store.score.credits.title.font_weight,
    fontSize: `${store.score.credits.title.size}px`,
    color: store.score.credits.title.color,
    left: `${x.value}px`,
    top: `${y.value}px`,
    textAlign: store.score.credits.title.text_align as CSSProperties['textAlign'],
    cursor: 'context-menu',
    fontStyle: store.score.credits.title.font_style,
    textDecoration: store.score.credits.title.decoration
  }
})

const editing = ref(false);

const saveEdit = (edit: { text: string,styles: TextStyle }) => {
  store.score.credits.title = {
    default_x: store.score.credits.title.default_x,
    default_y: store.score.credits.title.default_y,
    text: edit.text,
    font: edit.styles.fontFamily,
    size: parseInt(edit.styles.fontSize.toString().split('px')[0]),
    color: edit.styles.color,
    text_align: edit.styles.textAlign || 'left',
    font_weight: edit.styles.fontWeight,
    decoration: edit.styles.textDecoration,
    font_style: edit.styles.fontStyle,
  }
}


//const centerTitle = () =>
</script>

<template>
  <button @dblclick="editing=true" ref="scoreTitleEl"
    class="focus-item"
    :style="titleStyles">
    {{ store.score.credits.title.text }}
  </button>

  <TextEditor v-if="editing" v-model:visible="editing"
    :text="store.score.credits.title.text" :styles="titleStyles"
    @edit="saveEdit" />
</template>
