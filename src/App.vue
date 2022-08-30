<template>
    <div class="main container px-0">
        <BackImageContainer>
            <carousel class="mainCarousel" dir="rtl">
                <slide class="mainCarousel__view" v-for="slide in munes" :key="slide.name">
                    <component :is="slide.component"></component>
                </slide>

                <template #addons="{ currentSlide }">
                    <h1>{{currentSlide}}</h1>
                    <pagination />
                </template>
            </carousel>
        </BackImageContainer>
    </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import BackImageContainer from './components/BackImageContainer.vue'
import {ref, shallowRef} from "vue";
import HomeSlide from "./components/homeSlide.vue"
import StorySlide from "./components/StorySlide.vue"
const homeSlide = shallowRef(HomeSlide)
const storySlide = shallowRef(StorySlide)
interface IMenu {
    name: string;
    component: any;
}
const munes = ref<IMenu[]>([
    {name: '記念日', component: homeSlide},
    {name: 'ストーリー', component: storySlide}
])
</script>

<style scoped lang="scss">
.main {

    .mainCarousel {

        &__view {
            height: 100vh;
        }
    }
}
</style>
