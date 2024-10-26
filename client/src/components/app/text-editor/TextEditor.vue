<script setup lang="ts">
import { ref } from 'vue';
import { fontList, fontSizes } from './data';
import type { ColorPickerChangeEvent } from 'primevue/colorpicker';
import type { TextStyle } from '@/types/text.types';

interface Props {
  text: string,
  styles?: Partial<TextStyle>
}

const { text, styles } = defineProps<Props>();

const visible = defineModel('visible', { default: false });

const emit = defineEmits(['edit'])

const textRef = ref(text);
const textStyles = ref({
  color: styles?.color ?? '#000',
  textAlign: styles?.textAlign ?? 'left',
  fontWeight: styles?.fontWeight ?? 'normal',
  fontSize: styles?.fontSize ?? '15px',
  fontFamily: styles?.fontFamily ?? 'Arial',
  fontStyle: styles?.fontStyle ?? 'none',
  textDecoration: styles?.textDecoration ?? 'none'
});

const handleFinish = () => {
  emit('edit', {
    text: textRef.value,
    styles: textStyles.value
  });
  visible.value = false;
}

const colorHEX = ref(textStyles.value.color.split('#')[1]);
const handleColorChange = (event: ColorPickerChangeEvent) => {
  textStyles.value.color = `#${event.value}`
}


const toggleBold = () => {
  if (textStyles.value.fontWeight === 'bold') {
    textStyles.value.fontWeight = 'normal'
    return
  }
  textStyles.value.fontWeight = 'bold'
}

const toggleItalic = () => {
  if (textStyles.value.fontStyle === 'italic') {
    textStyles.value.fontStyle = 'normal'
    return
  }
  textStyles.value.fontStyle = 'italic'
}

const toggleUnderline = () => {
  if (textStyles.value.textDecoration === 'underline') {
    textStyles.value.textDecoration = 'none'
    return
  }
  textStyles.value.textDecoration = 'underline'
}

const setTextAlign = (value: "left" | "center" | "right") => {
  textStyles.value.textAlign = value;
}

</script>

<template>
  <Dialog v-model:visible="visible" modal header="Editor">
    <div class="grid gap-2 w-96">
      <div class="flex items-center gap-2">
        <Select v-model="textStyles.fontFamily" :options="fontList" size="small" class="flex-grow" />
        <Select v-model="textStyles.fontSize" :options="fontSizes" size="small" />
      </div>

      <div>
        <InputText v-model="textRef" fluid :style="textStyles" />
      </div>

      <div class="flex items-center justify-between">

        <div class="flex items-center gap-1">
          <button
            @click="toggleBold"
            class="flex items-center justify-center p-0.5 rounded"
            :class="{'bg-slate-300': textStyles.fontWeight === 'bold'}">
            <i class="material-icons-round">format_bold</i>
          </button>

          <button
            @click="toggleItalic"
            class="flex items-center justify-center p-0.5 rounded"
            :class="{ 'bg-slate-300': textStyles.fontStyle === 'italic'}">
            <i class="material-icons-round">format_italic</i>
          </button>

          <button
            @click="toggleUnderline"
            class="flex items-center justify-center p-0.5 rounded"
            :class="{ 'bg-slate-300': textStyles.textDecoration === 'underline'}">
            <i class="material-icons-round">format_underline</i>
          </button>
        </div>

        <div class="flex items-center gap-5">
          <div class="flex items-center gap-1">
            <button
              @click="setTextAlign('left')"
              class="flex items-center justify-center p-0.5 rounded"
              :class="{'bg-slate-300': textStyles.textAlign === 'left'}">
              <i class="material-icons-round">format_align_left</i>
            </button>

            <button
              @click="setTextAlign('center')"
              class="flex items-center justify-center p-0.5 rounded"
              :class="{ 'bg-slate-300': textStyles.textAlign === 'center'}">
              <i class="material-icons-round">format_align_center</i>
            </button>

            <button
              @click="setTextAlign('right')"
              class="flex items-center justify-center p-0.5 rounded"
              :class="{ 'bg-slate-300': textStyles.textAlign === 'right'}">
              <i class="material-icons-round">format_align_right</i>
            </button>
          </div>

          <div>
            <ColorPicker v-model="colorHEX" format="hex"
              @change="handleColorChange" />
          </div>
        </div>
      </div>

      <div class="mt-4 flex items-center gap-1 justify-end">
        <Button @click="visible = false" label="Cancel" severity="secondary" />
        <Button @click="handleFinish" label="Done" />
      </div>
    </div>
  </Dialog>
</template>
