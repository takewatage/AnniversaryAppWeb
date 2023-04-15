import { IIndexable, Model } from '@team-decorate/alcts'
import { useVuelidate, Validation } from '@vuelidate/core'
import { Ref, ref } from 'vue'
import { USER_RULES } from '@/js/composables/useRule'

const FILLABLE = ['uid', 'name', 'email', 'password', 'roomId']

const PRESENTS = ['type']

export default class User extends Model {
  uid = ''
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
