<!-- filename: LoginPage.vue -->
<script setup lang="ts">
import { ref, inject } from 'vue'
import { useLoadKey, LoadStore } from '../../composables/useLoad'

const email = ref<string>('')
const { state, onLoading } = inject(useLoadKey) as LoadStore

const emailRules = [
  (value: string) => !!value || 'メールアドレスは必須です',
  (value: string) => /.+@.+/.test(value) || '有効なメールアドレスを入力してください',
]

const onLogin = async () => {
  await onLoading(
    async () => {
      await new Promise((resolve) => {
        return setTimeout(resolve, 3000)
      })
    },
    async (e) => {
      console.log(e)
    }
  )
}
</script>

<template>
  <div>
    <div class="h-100vh d-flex">
      <v-card class="login-card">
        <template #title>
          <p class="title">ログイン</p>
        </template>
        <v-container class="py-0">
          <v-text-field
            ref="emailInput"
            v-model="email"
            :rules="emailRules"
            label="メールアドレス"
            required
            color="#FF80AB"
            class="mb-2"
            variant="underlined"
            validate-on="blur"
          />
        </v-container>
        <v-card-actions>
          <v-spacer />
          <v-btn
            class="fw-bold"
            color="blue"
            variant="plain"
            :loading="state"
            @click="onLogin"
          >
            <p class="fs-bold pa-0">ログイン</p>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-weight: 700;
  font-size: 26px;
}
.login-card {
  max-width: 500px;
  margin: auto;
  max-height: calc(100vh - 16px);
  width: 100%;
}
</style>
