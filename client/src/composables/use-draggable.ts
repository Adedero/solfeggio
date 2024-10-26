import { ref, onMounted, onUnmounted, type Ref, watch } from 'vue';
import { useStore } from '@/stores/store';

interface UseDraggableOptions {
  initialValue: {
    x: number;
    y: number;
  };
  centerVertically?: boolean;
  onDragEnd?: (x: number, y: number) => void;
}

export default function useDraggable(el: Ref<HTMLElement | null>, options: UseDraggableOptions) {
  const store = useStore();
  const x = ref(options.initialValue.x || 0);
  const y = ref(options.initialValue.y || 0);
  const scale = ref(store.workspace.scale || 1);
  const pos1 = ref(0);
  const pos2 = ref(0);
  const pos3 = ref(0);
  const pos4 = ref(0);
  const hasMoved = ref(false); // Track if any movement has occurred
  let centerLineEl: HTMLElement | null = null;
  const centerThreshold = 10; // Threshold in pixels to detect near-center

  const onMouseDown = (e: MouseEvent) => {
    hasMoved.value = false;
    pos3.value = e.clientX;
    pos4.value = e.clientY;
    document.onmouseup = onMouseUp;
    document.onmousemove = onMouseMove;
  };

  const onMouseMove = (e: MouseEvent) => {
    hasMoved.value = true;
    pos1.value = pos3.value - e.clientX;
    pos2.value = pos4.value - e.clientY;
    pos3.value = e.clientX;
    pos4.value = e.clientY;

    x.value = x.value - pos1.value / scale.value;
    y.value = y.value - pos2.value / scale.value;

    checkCenter();
  };

  const onMouseUp = () => {
    document.onmouseup = null;
    document.onmousemove = null;
    if (options.onDragEnd && hasMoved.value) {
      options.onDragEnd(x.value, y.value);
    }
    centerLineEl?.classList.remove('show');
  };

  const checkCenter = () => {
    const pageWidth = store.score.appearance.page_layout.width;
    const elementWidth = el.value?.getBoundingClientRect().width || 0;
    const elementCenterX = x.value + elementWidth / 2;
    const pageCenterX = pageWidth / 2;

    if (Math.abs(elementCenterX - pageCenterX) <= centerThreshold) {
      centerLineEl?.classList.add('show');
    } else {
      centerLineEl?.classList.remove('show');
    }
  };

  onMounted(() => {
    centerLineEl = document.querySelector('.center-line');
    el.value?.addEventListener('mousedown', onMouseDown);

    if (options.centerVertically && el.value && options.initialValue.x === 0) {
      const pageWidth = store.score.appearance.page_layout.width;
      const { width } = el.value?.getBoundingClientRect() ?? { width: 0 };
      x.value = Math.round((pageWidth - width) / 2);
    }
  });

  onUnmounted(() => {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
    el.value?.removeEventListener('mousedown', onMouseDown);
  });

  watch(
    () => store.workspace.scale,
    (newScale) => {
      scale.value = newScale;
    }
  );

  return { x, y };
}
