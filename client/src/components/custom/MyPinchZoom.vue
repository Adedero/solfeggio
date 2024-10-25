<template>
  <div class="pinch-zoom" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd" :style="zoomStyle">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      scale: 1,
      lastScale: 1,
      startDistance: 0,
      initialScale: 1,
      isPinching: false,
    };
  },
  computed: {
    zoomStyle() {
      return {
        transform: `scale(${this.scale})`,
        transformOrigin: '0 0',
        touchAction: 'none', // Prevent default touch actions
      };
    },
  },
  methods: {
    getDistance(touches) {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    },
    onTouchStart(event) {
      if (event.touches.length === 2) {
        this.isPinching = true;
        this.startDistance = this.getDistance(event.touches);
        this.initialScale = this.scale;
      }
    },
    onTouchMove(event) {
      if (this.isPinching && event.touches.length === 2) {
        const currentDistance = this.getDistance(event.touches);
        this.scale = (currentDistance / this.startDistance) * this.initialScale;
      }
    },
    onTouchEnd(event) {
      if (this.isPinching) {
        this.isPinching = false;
      }
    },
  },
};
</script>

<style scoped>
.pinch-zoom {
  overflow: hidden;
  touch-action: none;
  /* Disable default touch behavior */
}

.content {
  width: 100%;
  height: 100%;
  /* Style your content here */
}
</style>
