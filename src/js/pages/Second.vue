<!-- filename: Second.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const go = () => {
  router.push('/')
}
</script>
<template>
  <h1>Second</h1>
  <div @click="go">go</div>
</template>

<style scoped lang="scss"></style>
