<script setup lang="ts">
import { computed, ref } from 'vue';
import type { CSSProperties } from 'vue';
import type { TextStyle } from '../../../../types/text.types';

import { useStore } from '../../../../stores/store';
const store = useStore();

const scoreTitleEl = ref<HTMLHeadingElement | null>(null);
const defaultLeft = ref<number>(50)

const scoreTitle = computed(() => store.score.credits.title.text);
const titleStyles = computed(() : CSSProperties => {
  const {
    font,
    size,
    color,
    default_x,
    default_y,
    text_align,
    font_weight,
    font_style,
    decoration
  } = store.score.credits.title

  return {
    position: 'absolute',
    fontFamily: font,
    fontWeight: font_weight,
    fontSize: `${size}px`,
    color,
    left: default_x ? `${default_x}px` : `${defaultLeft.value}%`,
    top: `${default_y}px`,
    transform: default_x ? '' : `translateX(-${defaultLeft.value}%)`,
    textAlign: text_align as CSSProperties['textAlign'],
    cursor: 'context-menu',
    fontStyle: font_style,
    textDecoration: decoration
  }
})

const editing = ref(false);

const saveEdit = (edit: {
  text: string,
  styles: TextStyle
}) => {
  store.score.credits.title = {
    ...store.score.credits.title,
    text: edit.text,
    font: edit.styles.fontFamily,
    size: parseInt(edit.styles.fontSize.toString().split('px')[0]),
    color: edit.styles.color,
    text_align: edit.styles.textAlign || 'left',
    font_weight: edit.styles.fontWeight,
    decoration: edit.styles.textDecoration,
    font_style: edit.styles.fontStyle
  }
}

//const centerTitle = () =>
</script>

<template>
  <button @dblclick="editing=true" ref="scoreTitleEl"
    class="focus-item score-title"
    :style="[titleStyles]">
    {{ scoreTitle }}
  </button>

  <TextEditor v-if="editing" v-model:visible="editing"
  :text="scoreTitle" :styles="titleStyles"
  @edit="saveEdit" />
</template>
