<!-- filename: Home.vue -->
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const go = () => {
  router.push('/popo')
}
</script>
<template>
  <h1>HOme</h1>
  <div
    class="popopo"
    @click="go"
  >
    go
  </div>
</template>

<style scoped lang="scss"></style>
