<script setup lang="ts">
import ClickCounter from './components/ClickCounter.vue'
</script>

<template>
  <div class="main container px-0">
    <h1>APP.vue</h1>
    <ClickCounter />
  </div>
</template>

<style scoped lang="scss">
.main {
  .mainCarousel {
    &__view {
      height: 100vh;
    }
  }
}
</style>
