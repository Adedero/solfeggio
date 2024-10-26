import { onMounted, ref, type Ref } from "vue";
import { useStore } from "@/stores/store";

export default function getElementCenter(el: Ref<HTMLElement | null>, initial_x : number) {
  const default_x = ref(initial_x)
  const x = ref<number>(0);
  const store = useStore();

  if (default_x.value === 0) return default_x;

  onMounted(() => {
    if (!el.value) return;
    const pageWidth = store.score.appearance.page_layout.width;
    const { width } = el.value.getBoundingClientRect();
    x.value = (pageWidth - width) / 2
  })
  
  return x;
}