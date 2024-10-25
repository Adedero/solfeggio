<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(true);
</script>

<template>
  <div class="toolbar h-full bg-cyan-500" :class="{ 'open': isOpen }">
    <header class="w-full">
      <Button @click="isOpen = !isOpen" :label="isOpen ? 'Toolbar' : ''"
        :icon="isOpen ? 'pi pi-arrow-right' : 'pi pi-bars'" class="w-full rounded-none"
        :class="{ 'justify-between ': isOpen }" icon-pos="right" />
    </header>

    <div class="tools-container text-sm">
      <Accordion value="0">
        <template #collapseicon>
          <span v-if="isOpen" class="pi pi-chevron-down text-slate-600"></span>
        </template>
        <template #expandicon>
          <span v-if="isOpen" class="pi pi-chevron-up text-slate-600"></span>
        </template>

        <AccordionPanel value="0">
          <AccordionHeader @click="isOpen=true" class="p-2 bg-[--p-primary-50] rounded-none">
            <div v-if="isOpen">Key signature</div>
            <div v-else class="w-full border-2 rounded p-2 border-slate-500 flex flex-col items-center justify-center">
              <div class="flex text-xl font-bold">
                A
                <MyIcon icon="flat" width="15" height="15" />
              </div>
              <small class="text-center">Key</small>
            </div>
          </AccordionHeader>
          <AccordionContent v-if="isOpen">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="1">
          <AccordionHeader @click="isOpen=true" class="p-2 bg-[--p-primary-50] rounded-none">
            <div v-if="isOpen">Time signature</div>
            <div v-else class="w-full border-2 rounded p-2 border-slate-500 flex flex-col items-center justify-center">
              <div class="leading-4 flex flex-col text-xl font-bold">
                <span>4</span>
                <span>4</span>
              </div>
              <small class="text-center">Time</small>
            </div>
          </AccordionHeader>
          <AccordionContent v-if="isOpen">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel value="2">
          <AccordionHeader @click="isOpen=true" class="p-2 bg-[--p-primary-50] rounded-none">
            <div v-if="isOpen">Dynamics</div>
            <div v-else class="w-full border-2 rounded p-2 border-slate-500 flex flex-col items-center justify-center">
              <MyIcon icon="forte" width="24" height="24" />
              <small class="text-center">Dynamics</small>
            </div>
          </AccordionHeader>
          <AccordionContent v-if="isOpen">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

  </div>
</template>

<style>
.toolbar {
  width: 5rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 200ms ease-in-out;
}

.toolbar.open {
  width: 16rem;
}
</style>