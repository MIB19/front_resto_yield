<template>
  <div class="w-full font-poppins flex flex-col">
    <LayoutsNav />
    <Nuxt class="w-full min-h-screen" />
    <LayoutsFooterCompany />
  </div>
</template>
<script>
export default {
  name: 'Default'
}
</script>
<style>
.page-enter-active, .page-leave-active {
  @apply transition-all duration-1000 ease-out
}
.page-enter, .page-leave-to {
  @apply opacity-0 translate-y-4
}

.slide-fade-enter-active {
  @apply transition-all duration-1000 ease-out;
}

.slide-fade-leave-active {
  @apply transition-all duration-1000 ease-out;
}

.slide-fade-enter {
  @apply translate-y-96 opacity-0;
}
.slide-fade-leave-to {
  @apply translate-y-96 opacity-0;
}

.right-slide-enter-active {
  @apply transition-all duration-1000 ease-in-out;
}
.right-slide-leave-active {
  @apply transition-all duration-1000 ease-in-out;
}

.right-slide-enter {
  @apply -translate-x-96 opacity-0;
}
.right-slide-leave {
  @apply -translate-x-96 opacity-0;
}

.slide-left-enter-active {
  @apply transition-all duration-1000 ease-out;
}
.slide-left-leave-active {
  @apply transition-all duration-1000 ease-out;
}

.slide-left-enter {
  @apply translate-x-96 opacity-0;
}
.slide-left-leave-to {
  @apply translate-x-96 opacity-0;
}

.banner-slide-enter-active {
  @apply transition-all duration-1000 ease-out;
}
.banner-slide-leave-active {
}

.banner-slide-enter {
  @apply translate-x-96 opacity-0;
}
.banner-slide-leave-to {
}

.swipe-up-enter-active {
  @apply transition-all duration-500 ease-out;
}
.swipe-up-leave-active {
}

.swipe-up-enter {
  @apply translate-y-20 opacity-0;
}
.swipe-up-leave-to {
}
</style>
