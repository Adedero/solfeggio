<script setup lang="ts">
interface Props {
  header?: string,
  sectionId?: string
}
defineProps<Props>();
</script>

<template>
  <section :id="sectionId" class="my-section w-full py-10 px-5 grid justify-center">
    <slot name="header">
      <header class="text-center font-semibold text-5xl md:text-6xl text-balance mb-10">
        {{ header }}
      </header>
    </slot>
    <slot name="default" />
  </section>
</template>
