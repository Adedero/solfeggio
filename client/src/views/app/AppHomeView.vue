<script setup lang="ts">
import { ref } from 'vue';

const layout = ref('grid');
</script>

<template>
  <main class="h-dvh">
    <AppHomeHeader />

    <section class="p-5 h-[calc(100dvh-6rem)] flex flex-col gap-2 *:flex-shrink-0">
      <header class="flex items-center gap-2 justify-between flex-wrap">
        <h1 class="text-4xl font-medium text-[--p-primary-800]">Scores</h1>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-3">
            <Button @click="layout = 'grid'" icon="pi pi-table" size="small" severity="secondary"
              :outlined="layout !== 'grid'" />
            <Button @click="layout = 'list'" icon="pi pi-list" size="small" severity="secondary"
              :outlined="layout !== 'list'" />
          </div>
          <InputGroup>
            <InputGroupAddon>
              <span class="pi pi-search"></span>
            </InputGroupAddon>
            <InputText type="search" size="small" placeholder="Search" />
          </InputGroup>
        </div>
      </header>

      <div class="max-h-[calc(100%-3rem)] py-3">
        <ScoreList :layout />
      </div>
    </section>

    <div class="h-10 flex items-center gap-4 justify-end px-5">
      <ScoreCreator />
      <Button label="Open other..." size="small" outlined />
    </div>
  </main>
</template>