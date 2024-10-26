import { ref } from 'vue';
import type { Ref } from "vue"
import { useStore } from "@/stores/store";

export const getCenter = (el: Ref<HTMLElement | null>) => {
  const store = useStore();
  const x = ref(0);
  const y = ref(0);

  if (!el.value) return;

  const pageWidth = store.score.appearance.page_layout.width;
  const pageHeight = store.score.appearance.page_layout.height;

  const { width, height } = el.value.getBoundingClientRect();

  x.value = parseInt(((pageWidth - width) / 2.5).toFixed(0));
  y.value = parseInt(((pageHeight - height) / 2.5).toFixed(0));

  return {
    centerX: x.value,
    centerY: y.value
  }
}