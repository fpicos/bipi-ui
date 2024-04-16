<script setup lang="ts">
export interface HelloWorldProps {
  msg: string
}

defineProps<HelloWorldProps>()
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
}
</style>
