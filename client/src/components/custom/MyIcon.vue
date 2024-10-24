<script setup lang="ts">
interface IconProps {
  width: number | string;
  height: number | string;
  icon: string;
  fill: string;
  stroke: string;
  strokeWidth: number | string
}

const {
  width = 40,
  height = 40,
  icon = 'logo',
  fill = 'currentColor',
  stroke = 'currentColor',
  strokeWidth = 1
} = defineProps<IconProps>();
</script>

<template>
  <SwitchCase :case="icon">
    <SwitchCaseItem value="logo">
      <svg xml:space="preserve" :width :height
        style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 179 297.69">
        <path :fill
          d="M110.04 189.1c-202.46,-41.72 -85.98,-211.64 29.46,-185.55 49.14,11.11 53.83,69.92 4,76.4 -134.29,17.45 -126.36,69.58 -33.46,109.15z" />
        <path :fill
          d="M68.33 110.27c202.47,41.72 85.99,211.64 -29.45,185.55 -49.15,-11.1 -53.83,-69.92 -4.01,-76.4 134.29,-17.44 126.36,-69.58 33.46,-109.15z" />
      </svg>
    </SwitchCaseItem>
  </SwitchCase>
</template>