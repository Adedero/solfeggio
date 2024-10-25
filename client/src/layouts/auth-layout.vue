<template>
  <main class="md:min-h-dvh flex flex-col gap-5 overflow-y-auto bg-gradient-to-tr from-teal-300 to-blue-500">
    <section
      class="w-full pt-10 md:pt-0 md:mt-6 flex flex-col items-center justify-center gap-5 flex-grow">
      <header>
        <RouterLink to="/" class="text-white flex items-center gap-1">
          <MyIcon icon="logo" width="30" height="40" />
          <h1 class="text-2xl">Solfeggio</h1>
        </RouterLink>
      </header>
      <RouterView />
    </section>
    
    <footer class="flex-shrink-0 py-5 px-4 bg-white">
      <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-medium text-xs">
        <p>Terms</p>
        <p>Privacy Policy</p>
        <p>Copyright</p>
        <p>Help & Support</p>
      </div>
    </footer>
  </main>
</template>