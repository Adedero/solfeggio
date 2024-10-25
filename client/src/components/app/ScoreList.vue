<script setup lang="ts">
interface Props {
  layout?: string
}
const { layout = 'grid' } = defineProps<Props>();

</script>

<template>
  <div class="h-full overflow-y-auto">
    <SwitchCase :case="layout">
      <SwitchCaseItem value="grid">
        <div class="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-5">
          <ScoreCreator>
            <template #default="{ open }">
              <div @click="open()" class="cursor-pointer text-center grid gap-1 group">
                <div
                  class="group-hover:bg-[--p-primary-50] h-40 border border-[--p-primary-color] rounded-md p-4 grid place-content-center">
                  <span class="pi pi-plus text-[--p-primary-color]" style="font-size: 2rem"></span>
                </div>
                <p class="text-sm font-medium">New score</p>
              </div>
            </template>
          </ScoreCreator>

          <div v-for="i in 20" :key="i" class="cursor-pointer text-center group">
            <div
              class="group-hover:bg-[--p-primary-50] h-40 border border-[--p-primary-color] text-[--p-primary-color] rounded-md p-4 grid place-content-center">
              <MyIcon icon="logo" height="50" />
            </div>
            <p class="text-sm font-medium truncate mt-1">New score cvcv fx fxf x f x fx fx f x f xfxfx</p>
            <p class="text-xs font-medium text-slate-500">5 HOURS AGO</p>
          </div>
        </div>
      </SwitchCaseItem>

      <SwitchCaseItem value="list">
        B
      </SwitchCaseItem>
    </SwitchCase>
  </div>
</template>