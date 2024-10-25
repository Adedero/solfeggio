<script setup lang="ts">
import SwitchCaseItem from './switch-case/SwitchCaseItem.vue';

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
  stroke = 'currentColor',
} = defineProps<IconProps>();
</script>

<template>
  <SwitchCase :case="icon">
    <SwitchCaseItem value="logo">
      <svg xml:space="preserve" :width :height
        style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
        viewBox="0 0 179 297.69">
        <path :fill d="M110.04 189.1c-202.46,-41.72 -85.98,-211.64 29.46,-185.55 49.14,11.11 
          53.83,69.92 4,76.4 -134.29,17.45 -126.36,69.58 -33.46,109.15z" />
        <path :fill d="M68.33 110.27c202.47,41.72 85.99,211.64 -29.45,185.55 -49.15,-11.1 
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

    <SwitchCaseItem value="cursor">
      <svg viewBox="0 0 24 24" fill="none" :width :height xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M16.5744 19.1999L12.6361 15.2616L11.4334 16.4643C10.2022 17.6955 9.58656 18.3111 8.92489 18.1658C8.26322 18.0204 7.96225 17.2035 7.3603 15.5696L5.3527 10.1205C4.15187 6.86106 3.55146 5.23136 4.39141 4.39141C5.23136 3.55146 6.86106 4.15187 10.1205 5.35271L15.5696 7.3603C17.2035 7.96225 18.0204 8.26322 18.1658 8.92489C18.3111 9.58656 17.6955 10.2022 16.4643 11.4334L15.2616 12.6361L19.1999 16.5744C19.6077 16.9821 19.8116 17.186 19.9058 17.4135C20.0314 17.7168 20.0314 18.0575 19.9058 18.3608C19.8116 18.5882 19.6077 18.7921 19.1999 19.1999C18.7921 19.6077 18.5882 19.8116 18.3608 19.9058C18.0575 20.0314 17.7168 20.0314 17.4135 19.9058C17.186 19.8116 16.9821 19.6077 16.5744 19.1999Z"
            :fill></path>
        </g>
      </svg>
    </SwitchCaseItem>

    <SwitchCaseItem value="flat">
      <svg :height :width version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#000000"
        transform="matrix(1, 0, 0, 1, 0, 0)" :stroke stroke-width="0.00512">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path :fill
              d="M200.438,214.712V0h-71.18v512c0,0,170.389-50.606,236.182-162.99 C424.052,248.893,324.927,139.024,200.438,214.712z M300.508,302.609c-6.37,82.823-100.117,126.984-100.117,126.984v-156.27 C239.449,239.14,305.394,239.14,300.508,302.609z">
            </path>
          </g>
        </g>
      </svg>
    </SwitchCaseItem>

    <SwitchCaseItem value="forte">
      <svg :height :width version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g>
            <path :fill
              d="M440.655,7.317c-15.991-5.275-48.527-14.46-88.442,2.223c-43.659,18.233-71.178,63.846-109.967,192.461 c-0.443,1.485-0.923,3.071-1.42,4.722H119.09v53.065h106.094c-15.678,53.61-18.02,68.817-26.855,97.858 c-13.889,45.587-61.974,140.503-112.919,112.43c-1.531-0.848-3.153-2.822,0.59-3.661c24.052-5.358,40.008-28.654,35.913-53.259 c-4.242-25.454-31.375-50.096-66.198-38.494c-30.378,10.126-36.004,42.561-35.118,65.552c0.295,7.931,4.647,18.472,6.934,22.336 c21.599,42.128,98.661,77.45,170.485,17.596c53.618-44.691,77.744-120.933,104.747-220.359h121.439v-53.065H316.67 c3.358-13.17,6.363-25.132,8.983-35.35c22.466-87.788,43.05-119.503,60.277-128.117c23.222-11.611,33.994,1.282,34.824,8.291 c1.384,11.777-16.268,21.091-18.076,38.734c-1.826,17.643,12.745,39.803,39.804,39.803c27.058,0,49.007-21.94,49.007-48.998 C491.471,52.507,475.313,18.781,440.655,7.317z">
            </path>
          </g>
        </g>
      </svg>
    </SwitchCaseItem>
  </SwitchCase>
</template>