<script setup lang="ts">
import { computed, reactive } from 'vue';

const user = reactive({
  email: "",
  username: "",
  password: "",
});

const disabled = computed(() => {
  return (
    !user.email || !user.username || !user.password || !user.checked
  )
});

</script>

<template>
  <div>
    <Stepper value="1" linear>
      <StepList>
          <Step value="1"></Step>
          <Step value="2"></Step>
          <Step value="3"></Step>
      </StepList>

      <StepPanels>
        <StepPanel v-slot="{ activateCallback }" value="1">
          <div class="grid gap-1">
            <label for="email" class="text-sm font-medium">Enter your email</label>
            <InputGroup>
              <InputGroupAddon>
                <span class="pi pi-at"></span>
              </InputGroupAddon>
              <InputText v-model.trim="user.email" type="email" id="email" />
            </InputGroup>
          </div>
            <div class="flex pt-6 justify-end">
              <Button label="Next" icon="pi pi-arrow-right" @click="activateCallback('2')" />
            </div>
        </StepPanel>

        <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="grid gap-1">
              <label for="id" class="text-sm font-medium">Enter a username</label>
              <InputGroup>
                <InputGroupAddon>
                  <span class="pi pi-user"></span>
                </InputGroupAddon>
                <InputText v-model.trim="user.username" type="text" id="id" />
              </InputGroup>
            </div>
            <div class="flex pt-6 justify-between">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')" />
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')" />
            </div>
        </StepPanel>

        <StepPanel v-slot="{ activateCallback }" value="3">
            <div class="grid gap-1">
              <label for="new-password" class="text-sm font-medium">Enter a strong password</label>
              <InputGroup>
                <InputGroupAddon>
                  <span class="pi pi-lock"></span>
                </InputGroupAddon>
                <Password v-model.trim="user.password" input-id="new-password" />
              </InputGroup>
            </div>
            <div class="flex pt-6 justify-between">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')" />
              <Button label="Done" icon="pi pi-check-circle" iconPos="right" :disabled />
            </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>