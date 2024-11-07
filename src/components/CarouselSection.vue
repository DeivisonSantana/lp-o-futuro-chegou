<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
const modules = [Pagination, Navigation, EffectFade, Autoplay];
import banner1 from "@/assets/imagens/banners/banner-1.jpg";
import banner2 from "@/assets/imagens/banners/banner-2.jpg";
import banner3 from "@/assets/imagens/banners/banner-3.jpg";
import banner4 from "@/assets/imagens/banners/banner-4.jpg";
import banner5 from "@/assets/imagens/banners/banner-5.jpg";
const banners = [banner1, banner2, banner3, banner4, banner5];
</script>
<template>
    <div class="w-full relative pt-24 md:pt-16">
        <swiper
            :spaceBetween="30"
            :effect="'fade'"
            :navigation="false"
            :pagination="{
                clickable: true,
            }"
            :slidesPerView="1"
            :modules="modules"
        >
            <SwiperSlide
                v-for="(banner, index) in banners"
                :key="index"
                class="bg-cyan-700"
            >
                <div class="h-full">
                    <img
                        :src="banner"
                        class="w-full max-h-[780px] object-cover mb-12"
                    />
                </div>
            </SwiperSlide>
        </swiper>
    </div>
</template>
<style scoped>
:deep(.swiper-pagination-bullet) {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: gray;
    opacity: 1;
    background: white;
}

:deep(.swiper-pagination-bullet-active) {
    color: #fff;
    background: yellow;
}
</style>
