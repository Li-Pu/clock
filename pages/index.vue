<template>
  <div class="container">
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
  }
]
</script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>