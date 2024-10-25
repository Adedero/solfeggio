<template>
  <div class="flex flex-col w-[min(90%,25rem)] bg-white py-5 px-6 rounded shadow-md">
    <h1 class="uppercase text-2xl tracking-wide font-medium text-center text-[--p-primary-600]">
      Sign Up
    </h1>
    <Divider />

    <SignUpForm />

    <Divider class="text-sm font-medium">Or</Divider>

    <GoogleAuth action="sign-up" />

    <div class="text-xs mt-5">
      By signing up, you agree to Solfeggio's Terms of Use and Privacy Policy.
    </div>

    <div class="mt-5 text-sm font-medium text-center">
      Already have an account? 
      <RouterLink :to="{ name: 'sign-in' }" class="text-[--p-primary-color] font-medium hover:underline">
        Sign in
      </RouterLink>.
    </div>
  </div>
</template>