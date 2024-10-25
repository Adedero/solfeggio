<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  minScale: {
    type: Number,
    default: 0.25
  },
  maxScale: {
    type: Number,
    default: 3
  },
  wheelZoomRatio: {
    type: Number,
    default: 0.1
  }
})

const emit = defineEmits(['update:scale'])
const container = ref<HTMLElement | null>(null)
const content = ref<HTMLElement | null>(null)
const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)

// Computed style with scale and translate transform
const transformStyle = computed(() => ({
  transform: `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value})`,
  transformOrigin: '0 0'
}))

// Wheel zoom handler
const onWheel = (event: WheelEvent) => {
  if (!event.ctrlKey) return
  event.preventDefault()

  const rect = container.value!.getBoundingClientRect()
  const mouseX = event.clientX - rect.left
  const mouseY = event.clientY - rect.top

  // Calculate point on content where mouse is before zoom
  const contentX = (mouseX - translateX.value) / scale.value
  const contentY = (mouseY - translateY.value) / scale.value

  const delta = -Math.sign(event.deltaY)
  const zoomFactor = 1 + (delta * props.wheelZoomRatio)
  const newScale = Math.min(
    Math.max(
      scale.value * zoomFactor,
      props.minScale
    ),
    props.maxScale
  )

  // Calculate new position to keep mouse point in same place
  translateX.value = mouseX - (contentX * newScale)
  translateY.value = mouseY - (contentY * newScale)

  scale.value = newScale
  emit('update:scale', newScale)
}

// Touch handling
let initialDistance = 0
let initialScale = 1
let initialTranslateX = 0
let initialTranslateY = 0

const getDistance = (touches: TouchList) => {
  const dx = touches[1].clientX - touches[0].clientX
  const dy = touches[1].clientY - touches[0].clientY
  return Math.sqrt(dx * dx + dy * dy)
}

const getMidpoint = (touches: TouchList) => {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2
  }
}

const onTouchStart = (event: TouchEvent) => {
  if (event.touches.length !== 2) return
  initialDistance = getDistance(event.touches)
  initialScale = scale.value
  initialTranslateX = translateX.value
  initialTranslateY = translateY.value
}

const onTouchMove = (event: TouchEvent) => {
  if (event.touches.length !== 2) return
  event.preventDefault()

  const rect = container.value!.getBoundingClientRect()
  const midpoint = getMidpoint(event.touches)
  const touchX = midpoint.x - rect.left
  const touchY = midpoint.y - rect.top

  // Calculate point on content where touch midpoint is before zoom
  const contentX = (touchX - initialTranslateX) / initialScale
  const contentY = (touchY - initialTranslateY) / initialScale

  const currentDistance = getDistance(event.touches)
  const newScale = Math.min(
    Math.max(
      initialScale * (currentDistance / initialDistance),
      props.minScale
    ),
    props.maxScale
  )

  // Calculate new position to keep touch midpoint in same place
  translateX.value = touchX - (contentX * newScale)
  translateY.value = touchY - (contentY * newScale)

  scale.value = newScale
  emit('update:scale', newScale)
}

const onTouchEnd = () => {
  initialDistance = 0
  initialScale = scale.value
  initialTranslateX = translateX.value
  initialTranslateY = translateY.value
}

// Reset function
const reset = () => {
  scale.value = 1
  translateX.value = 0
  translateY.value = 0
  initialDistance = 0
  initialScale = 1
  initialTranslateX = 0
  initialTranslateY = 0
  emit('update:scale', 1)
}

// Cleanup function
const cleanup = () => {
  if (container.value) {
    container.value.removeEventListener('touchstart', onTouchStart)
    container.value.removeEventListener('touchmove', onTouchMove)
    container.value.removeEventListener('touchend', onTouchEnd)
    container.value.removeEventListener('wheel', onWheel)
  }
}

// Lifecycle hooks
onMounted(() => {
  if (container.value) {
    container.value.addEventListener('touchstart', onTouchStart, { passive: false })
    container.value.addEventListener('touchmove', onTouchMove, { passive: false })
    container.value.addEventListener('touchend', onTouchEnd)
    container.value.addEventListener('wheel', onWheel, { passive: false })
  }
})

onBeforeUnmount(() => {
  cleanup()
})

defineExpose({
  reset,
  cleanup
})
</script>

<template>
  <div class="pinch-zoom-container" ref="container">
    <div class="pinch-zoom-content" :style="transformStyle" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.pinch-zoom-container {
  overflow: auto;
  touch-action: none;
  position: relative;
  width: 100%;
  height: 100%;
 /*  display: flex;
  align-items: center;
  justify-content: center; */
}

.pinch-zoom-content {
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
/*   justify-content: center;
 */
}

/* .pinch-zoom-content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
} */
</style>