<script setup lang="ts">
interface Props {
  action: "sign-in" | "sign-up"
}

defineProps<Props>()
</script>

<template>
  <div class="w-full">
    <SwitchCase :case="action">
      <SwitchCaseItem value="sign-in">
        <slot name="button">
          <Button label="Sign in with Google" icon="pi pi-google" outlined fluid />
        </slot>
      </SwitchCaseItem>

      <SwitchCaseItem value="sign-up">
        <slot name="button">
          <Button label="Sign up with Google" icon="pi pi-google" outlined fluid />
        </slot>
      </SwitchCaseItem>
    </SwitchCase>
  </div>
</template>