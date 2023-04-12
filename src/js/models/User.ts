import { IIndexable, Model } from '@team-decorate/alcts'
import { useVuelidate, Validation } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import { Ref, ref } from 'vue'

const FILLABLE = ['id', 'name', 'email', 'password', 'roomId']

const PRESENTS = ['type']

export const USER_RULES = {
  email: {
    required: helpers.withMessage('メールアドレスは必須です', required),
    email: helpers.withMessage('正しいメールアドレスを入力してください', email),
  },
  password: {
    required: helpers.withMessage('パスワードは必須です', required),
  },
}

export default class User extends Model {
  id = 0
  name = ''
  email = ''
  password = ''
  roomId = ''

  $externalResults = {}
  v$: Ref<Validation> = useVuelidate(USER_RULES, this, { $externalResults: this.$externalResults })

  constructor(data?: IIndexable) {
    super()

    this.fillable = FILLABLE
    this.presents = PRESENTS

    if (data) {
      this.data = data
    }
  }

  setRules() {
    this.v$ = useVuelidate(USER_RULES, this, { $externalResults: this.$externalResults })
  }

  getErrorMessage(key: string) {
    const v = ref(this.v$)
    if (!v.value[key].$errors.length) return ''
    return v.value[key].$errors[0].$message
  }
}
