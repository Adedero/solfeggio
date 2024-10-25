<template>
  <main>
    <div class="hero h-[120dvh] text-white flex gap-5 md:gap-0 flex-col items-center justify-center">
      <div class="px-5 pt-5 md:pt-0 text-center flex-grow flex flex-col items-center justify-center">
        <h1 class="text-5xl md:text-6xl font-semibold text-balance">
          The world's first<br> tonic solfa notation app.
        </h1>
        <div class="mt-6 md:text-lg">
          <p>Your all-in-one app for everything solfeggio.</p>
          <p class="font-medium">Music notation | Library | Community</p>
        </div>
        <div class="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button label="Get Started" icon="pi pi-play" size="large" class="px-8 py-3" />
          <Button label="Try it out" icon="pi pi-box" size="large" outlined class="px-8 py-3 border-white text-white hover:text-[--p-primary-color]" />
        </div> 
      </div>

      <div class="bg-slate-300 md:rounded-t-md w-full md:w-[80%] lg:w-[65%] h-96"></div>
    </div>
  </main>
</template>

<style scoped>
.hero {
  background-image: url('@/assets/images/bg_1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>