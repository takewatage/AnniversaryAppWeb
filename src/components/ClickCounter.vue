<script lang="ts" setup>
import { onMounted, ref } from 'vue'

// data
const innerCount = ref<number>(0)

// props
const props = withDefaults(
  defineProps<{
    modelValue: number
  }>(),
  {
    modelValue: 0,
  }
)
// emit
const emits = defineEmits<{
  (e: 'update:modelValue', count: number): void
}>()

onMounted(() => {
  innerCount.value = props.modelValue
})

// methods
const countUP = () => {
  emits('update:modelValue', innerCount.value++)
}
const countDown = () => {
  emits('update:modelValue', innerCount.value--)
}
</script>

<template>
  <div class="card">
    <h1>{{ innerCount }}</h1>
    <button
      type="button"
      class="btn btn-success"
      @click="countUP"
    >
      +
    </button>
    <button
      type="button"
      class="btn btn-danger"
      @click="countDown"
    >
      -
    </button>
  </div>
</template>

<style lang="scss">
.card {
  button {
    font-size: 20px;
  }
}
</style>
