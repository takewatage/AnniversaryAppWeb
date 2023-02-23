<script setup lang="ts">
import { inject } from 'vue'
import { LoadStore, useLoadKey } from '../../composables/useLoad'

const { state } = inject(useLoadKey) as LoadStore
</script>

<template>
  <v-dialog
    v-model="state"
    :scrim="false"
    persistent
    width="auto"
  >
    <v-progress-circular
      color="#0095A8"
      indeterminate
    />
  </v-dialog>
</template>

<style lang="scss">
.card {
  button {
    font-size: 20px;
  }
}
</style>
