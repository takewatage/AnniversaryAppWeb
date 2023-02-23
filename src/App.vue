<script setup lang="ts">
import { ref, provide } from 'vue'
import useLoad, { useLoadKey } from './js/composables/useLoad'
import LoadingDialog from './js/components/Ui/LoadingDialog.vue'
const theme = ref('light')

provide(useLoadKey, useLoad())
</script>

<template>
  <v-app :theme="theme">
    <v-main class="main">
      <div class="main-bg">
        <Suspense>
          <template #default>
            <router-view />
          </template>
          <template #fallback>
            <h1 class="text-red">LOAD.....</h1>
          </template>
          <template #error> エラー </template>
        </Suspense>
      </div>

      <loading-dialog />
    </v-main>
  </v-app>
</template>

<style scoped lang="scss">
.main {
  .v-container {
    max-width: 520px;
    margin: auto;
  }

  &-bg {
    background-image: url('/img/default_bg.jpeg');
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
