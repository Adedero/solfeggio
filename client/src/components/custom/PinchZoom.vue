<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  minScale: {
    type: Number,
    default: 0.5
  },
  maxScale: {
    type: Number,
    default: 3
  }
})

const emit = defineEmits(['update:scale'])

// Refs
const container = ref(null)
const content = ref(null)
const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)

// Touch tracking state
const touchState = ref({
  initialTouchDistance: 0,
  initialScale: 1,
  lastTouchCenter: { x: 0, y: 0 },
  initialPinchCenter: { x: 0, y: 0 }
})

// Computed styles
const transformStyle = computed(() => ({
  transform: `translate(${translateX.value}px, ${translateY.value}px) scale(${scale.value})`,
  transformOrigin: '0 0'
}))

// Touch handling utilities
const getTouchDistance = (touches) => {
  const dx = touches[1].clientX - touches[0].clientX
  const dy = touches[1].clientY - touches[0].clientY
  return Math.sqrt(dx * dx + dy * dy)
}

const getTouchCenter = (touches) => {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2
  }
}

// Event handlers
const onTouchStart = (event) => {
  if (event.touches.length !== 2) return

  touchState.value.initialTouchDistance = getTouchDistance(event.touches)
  touchState.value.initialScale = scale.value

  const rect = container.value.getBoundingClientRect()
  const center = getTouchCenter(event.touches)
  touchState.value.initialPinchCenter = {
    x: center.x - rect.left,
    y: center.y - rect.top
  }
  touchState.value.lastTouchCenter = center
}

const onTouchMove = (event) => {
  if (event.touches.length !== 2) return
  event.preventDefault()

  const currentDistance = getTouchDistance(event.touches)
  const newScale = Math.min(
    Math.max(
      touchState.value.initialScale * (currentDistance / touchState.value.initialTouchDistance),
      props.minScale
    ),
    props.maxScale
  )

  const currentCenter = getTouchCenter(event.touches)

  const dx = currentCenter.x - touchState.value.lastTouchCenter.x
  const dy = currentCenter.y - touchState.value.lastTouchCenter.y

  scale.value = newScale
  translateX.value += dx
  translateY.value += dy

  touchState.value.lastTouchCenter = currentCenter
  emit('update:scale', newScale)
}

const onTouchEnd = () => {
  touchState.value.initialTouchDistance = 0
  touchState.value.initialScale = scale.value
}

// Reset function
const reset = () => {
  scale.value = 1
  translateX.value = 0
  translateY.value = 0
  touchState.value = {
    initialTouchDistance: 0,
    initialScale: 1,
    lastTouchCenter: { x: 0, y: 0 },
    initialPinchCenter: { x: 0, y: 0 }
  }
  emit('update:scale', 1)
}

// Cleanup function
const cleanup = () => {
  if (container.value) {
    container.value.removeEventListener('touchstart', onTouchStart)
    container.value.removeEventListener('touchmove', onTouchMove)
    container.value.removeEventListener('touchend', onTouchEnd)
  }
}

// Lifecycle hooks
onMounted(() => {
  if (container.value) {
    container.value.addEventListener('touchstart', onTouchStart, { passive: false })
    container.value.addEventListener('touchmove', onTouchMove, { passive: false })
    container.value.addEventListener('touchend', onTouchEnd)
  }
})

onBeforeUnmount(() => {
  cleanup()
})

// Expose methods to parent components
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
  overflow: hidden;
  touch-action: none;
  position: relative;
  width: 100%;
  height: 100%;
}

.pinch-zoom-content {
  width: 100%;
  height: 100%;
  transform-origin: 0 0;
  will-change: transform;
}
</style>
