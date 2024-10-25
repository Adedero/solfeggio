<template>
  <div class="grid gap-3">
    <div class="grid gap-1">
      <label for="username-email" class="text-sm font-medium">Username or email</label>
      <InputGroup>
        <InputGroupAddon>
          <span class="pi pi-user"></span>
        </InputGroupAddon>
        <InputText type="text" id="username-email" />
      </InputGroup>
    </div>

    <div class="grid gap-1">
      <label for="password" class="text-sm font-medium">Password</label>
      <InputGroup>
        <InputGroupAddon>
          <span class="pi pi-lock"></span>
        </InputGroupAddon>
        <Password input-id="password" :feedback="false" />
      </InputGroup>
    </div>

    <p class="text-sm font-medium">Forgot password?</p>

    <div>
      <Button label="Sign In" icon="pi pi-sign-in" fluid />
    </div>
  </div>
</template>