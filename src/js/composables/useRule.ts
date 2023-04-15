import { email, helpers, required } from '@vuelidate/validators'

export const USER_RULES = {
  email: {
    required: helpers.withMessage('メールアドレスは必須です', required),
    email: helpers.withMessage('正しいメールアドレスを入力してください', email),
  },
  password: {
    required: helpers.withMessage('パスワードは必須です', required),
  },
}
