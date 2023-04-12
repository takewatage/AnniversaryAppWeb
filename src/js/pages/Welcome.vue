<!-- filename: Welcome.vue -->
<script setup lang="ts">
import { ref, inject } from 'vue'
import { useLoadKey, LoadStore } from '../composables/useLoad'
import User from '../models/User'

const user = ref<User>(new User())
const showLogin = ref<boolean>(true)

const { onLoading } = inject(useLoadKey) as LoadStore

const changeForm = () => {
  resetValidate()
  user.value.update({ ...new User().getPostable() })
  showLogin.value = !showLogin.value
}

const checkValidate = () => {
  user.value.setRules()
  user.value.v$.$validate()
  return user.value.v$.$error
}

const resetValidate = () => {
  user.value.v$.$reset()
  user.value.v$.$clearExternalResults()
}

const onSubmit = async () => {
  resetValidate()
  if (!checkValidate()) {
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
}
</script>

<template>
  <div class="LoginPage-container h-100vh d-flex">
    <v-card class="login-card">
      <template #title>
        <p class="title">{{ showLogin ? 'ログイン' : 'サインアップ' }}</p>
      </template>
      <v-form
        class="px-6"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="user.email"
          label="メールアドレス"
          color="#FF80AB"
          class="mb-2"
          variant="underlined"
          :error="user.v$.email.$error"
          :error-messages="user.getErrorMessage('email')"
        />
        <v-text-field
          v-model="user.password"
          color="#FF80AB"
          label="パスワード"
          class="mb-2"
          variant="underlined"
          :error="user.v$.password.$error"
          :error-messages="user.getErrorMessage('password')"
        />
        <v-card-actions>
          <v-btn
            class="fw-bold"
            color="#FF80AB"
            variant="plain"
            @click="changeForm()"
          >
            <p class="fs-bold">{{ showLogin ? '登録' : 'ログイン' }}はこちら</p>
          </v-btn>
          <v-spacer />
          <v-btn
            class="fw-bold"
            color="blue"
            type="submit"
          >
            <p class="fs-bold pa-0">{{ showLogin ? 'ログイン' : '登録' }}</p>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.LoginPage-container {
  padding: 16px;
}

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
