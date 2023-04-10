<template>
  <div class="w-screen h-screen flex flex-row items-center justify-center">
    <div v-for="clock in routeMap" :key="clock.link">
      <NuxtLink :to="`/${clock.link}`">{{ clock.title }}</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const routeMap = [
  {
    link: 'base',
    title: '基本钟表',
  },
  {
    // inspired by https://github.com/jaibisht/Digital-Clock',
    link: 'neon',
    title: '霓虹效果钟表',
  },
]
</script>