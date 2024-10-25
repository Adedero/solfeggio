<script setup lang="ts">
interface IconProps {
  width?: number | string;
  height?: number | string;
  icon?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string
}

const {
  width = 40,
  height = 40,
  icon = 'logo',
  fill = 'currentColor',
  //stroke = 'currentColor',
  //strokeWidth = 1
} = defineProps<IconProps>();
</script>

<template>
  <SwitchCase :case="icon">
    <SwitchCaseItem value="logo">
      <svg xml:space="preserve" :width :height
        style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 179 297.69">
        <path :fill
          d="M110.04 189.1c-202.46,-41.72 -85.98,-211.64 29.46,-185.55 49.14,11.11 
          53.83,69.92 4,76.4 -134.29,17.45 -126.36,69.58 -33.46,109.15z" />
        <path :fill
          d="M68.33 110.27c202.47,41.72 85.99,211.64 -29.45,185.55 -49.15,-11.1 
          -53.83,-69.92 -4.01,-76.4 134.29,-17.44 126.36,-69.58 33.46,-109.15z" />
      </svg>
    </SwitchCaseItem>

    <SwitchCaseItem value="user">
      <svg viewBox="0 0 24 24" :width :height fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 
            6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" :fill>
          </path>
          <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 
            19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 
            8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 
            18.5964 16.807 19.0112Z" :fill>
          </path>
          <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 
            7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" :fill>
          </path>
        </g>
      </svg>
    </SwitchCaseItem>
  </SwitchCase>
</template>