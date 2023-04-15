<script setup lang="ts">
import { inject } from 'vue'
import { LoadStore, useLoadKey } from '@/js/composables/useLoad'

const { isLoad } = inject(useLoadKey) as LoadStore
</script>

<template>
  <div
    v-if="isLoad"
    class="load-overlay"
  >
    <v-progress-circular
      color="#FF80AB"
      class="load-overlay__icon"
      indeterminate
    />
  </div>
</template>

<style lang="scss">
.load-overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000030;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
