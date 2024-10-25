import Aura from '@primevue/themes/aura';
import { definePreset } from '@primevue/themes';

const MyPreset = definePreset(Aura, {
  primitive: {
    dodger: {
      50: '#F5F0FF',
      100: '#E5D6FF',
      200: '#CBADFF',
      300: '#AB7AFF',
      400: '#8138FF',
      500: '#640AFF',
      600: '#4D00D1',
      700: '#4000AD',
      800: '#2F0080',
      900: '#200057',
      950: '#150038'
    }
  },
  semantic: {
    primary: {
      50: '{cyan.50}',
      100: '{cyan.100}',
      200: '{cyan.200}',
      300: '{cyan.300}',
      400: '{cyan.400}',
      500: '{cyan.500}',
      600: '{cyan.600}',
      700: '{cyan.700}',
      800: '{cyan.800}',
      900: '{cyan.900}',
      950: '{cyan.950}',
    },
  },
})

const PrimevueOptions = {
  theme: {
    preset: MyPreset,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
}

export default PrimevueOptions
