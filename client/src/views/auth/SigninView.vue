<template>
  <div class="flex flex-col w-[min(90%,25rem)] bg-white py-5 px-6 rounded shadow-md">
    <h1 class="uppercase text-2xl tracking-wide font-medium text-center text-[--p-primary-600]">
      Sign In
    </h1>

    <div class="text-slate-400 mb-1 grid place-content-center">
      <MyIcon icon="user" width="120" height="120"/>
    </div>

    <SignInForm />

    <Divider class="text-sm font-medium">Or</Divider>

    <GoogleAuth action="sign-in" />


    <div class="mt-5 text-sm font-medium text-center">
      New to Solfeggio? 
      <RouterLink :to="{ name: 'sign-up' }" class="text-[--p-primary-color] font-medium hover:underline">
        Create an account
      </RouterLink>.
    </div>
  </div>
</template>