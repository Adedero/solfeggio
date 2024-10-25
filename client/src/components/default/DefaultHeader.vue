<template>
  <header class="sticky top-0 z-50 py-4 px-5 bg-[--p-primary-500] text-white flex items-center gap-3">
    <DefaultSidebar />
    <RouterLink to="/" class="hidden md:flex items-center gap-1">
      <MyIcon icon="logo" />
      <h1 class="text-4xl font-light">Solfeggio</h1>
    </RouterLink>
    <div class="flex-grow lg:max-w-[40%]">
      <MusicLibSearchbar />
    </div>
    <div class="ml-auto flex items-center gap-4 xl:gap-12">
      <div class="hidden lg:flex items-center lg:gap-4">
        <RouterLink to="/" class="link">Home</RouterLink>
        <p>Library</p>
        <p>Pricing</p>
        <p>Help</p>
      </div>
      <div class="flex items-center gap-2">
        <Button @click="$router.push({ name: 'sign-in' })" label="Sign in" icon="pi pi-sign-in"
          severity="secondary" class="hidden md:flex lg:hidden"/>
        <Button @click="$router.push({ name: 'sign-in' })" label="Sign in" icon="pi pi-sign-in"
          size="small" severity="secondary" class="hidden lg:flex"/>
        <Button @click="$router.push({ name: 'sign-up' })" icon="pi pi-user-plus" size="small"
          outlined class="hidden lg:flex xl:hidden text-white hover:text-[--p-primary-500]"/>
        <Button @click="$router.push({ name: 'sign-up' })" label="Sign up" icon="pi pi-user-plus" size="small"
          outlined class="hidden xl:flex text-white hover:text-[--p-primary-500]"/>
      </div>
    </div>
  </header>
</template>

<style scoped>
a.link {
  position: relative;
  text-align: center;
  font: medium;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 1.25px;
    width: 0;
    background-color: #fff;
    transition: width 100ms ease-in;
  }

  &:hover:before {
    width: 100%;
  }
}

a.link.router-link-exact-active {
  font-weight: 500;

  &::before {
    width: 100%;
  }
}
</style>