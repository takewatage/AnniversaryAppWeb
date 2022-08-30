<template>
    <div class="BackImageContainer" :style="styles">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
const DEFAULT_IMG = "/img/default_image.jpeg"

const styles = computed(() => {
    const path = props.imgSrc ? props.imgSrc : DEFAULT_IMG
    return {
        'background-image': 'url(' + path + ')',
    }
})
const innerImgSrc = ref<string>('')
// props
const props = withDefaults(
    defineProps<{
        imgSrc?: string
    }>(),
    {
        imgSrc: '',
    }
)

onMounted(() => {
    innerImgSrc.value = props.imgSrc
})
</script>

<style lang="scss">
.BackImageContainer {
    max-width: 768px;
    height: 100vh;
    margin: auto;
    background-size: cover;
    background-position: center;
}
</style>
