<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import {
    Pagination,
    FreeMode,
    Thumbs,
    Navigation,
    EffectFade,
    Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
const modules = [
    Pagination,
    Thumbs,
    FreeMode,
    Navigation,
    EffectFade,
    Autoplay,
];
const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

import slide1 from "@/assets/imagens/slides/slide-caminhao.jpg";
import slide2 from "@/assets/imagens/slides/slide-2.jpeg";
import slide3 from "@/assets/imagens/slides/slide-3.jpg";
import slide4 from "@/assets/imagens/slides/slide-4.jpg";
const slides = [slide1, slide2, slide3, slide4];
</script>
<template>
    <div class="bg-cyan-700 w-full h-full xl:h-screen">
        <div class="pt-[6rem] flex justify-center items-center gap-0">
            <div class="relative z-0">
                <div
                    class="border-4 rounded-full md:left-[2rem] lg:left-[4rem] xl:-left-[1.6rem] 2xl:-left-[4rem] top-[5rem] sm:top-[2rem] md:-top-[2rem] lg:top-[2rem] xl:top-[8.6rem] 2xl:top-[8rem] z-0 absolute border-yellow-500 w-[640px] h-[640px] sm:w-[200px] sm:h-[180px] md:w-[360px] md:h-[360px] lg:w-[480px] lg:h-[480px] xl:w-[560px] xl:h-[560px] 2xl:w-[600px] 2xl:h-[600px]"
                ></div>
                <div
                    class="right-[7.8rem] sm:right-[9rem] md:right-[8rem] lg:right-[9rem] xl:right-[12.5rem] 2xl:right-[12.5rem] -top-[2.9rem] sm:-top-[3rem] md:-top-[4.8rem] lg:-top-[3rem] xl:top-[1.8rem] 2xl:top-[1.8rem] -rotate-[0.3deg] overflow-hidden z-0 w-[190px] h-[640px] sm:h-[520px] sm:w-[250px] md:h-[360px] md:w-[200px] lg:h-[520px] lg:w-[265px] xl:w-[320px] xl:h-[860px] 2xl:w-[320px] 2xl:h-[860px] absolute"
                >
                    <swiper
                        :spaceBetween="30"
                        :effect="'fade'"
                        :navigation="false"
                        :Pagination="false"
                        :slidesPerView="1"
                        :modules="modules"
                        :thumbs="{ swiper: thumbsSwiper }"
                        :autoplay="{
                            delay: 2500,
                            disableOnInteraction: false,
                        }"
                    >
                        <SwiperSlide
                            v-for="(slide, index) in slides"
                            :key="index"
                        >
                            <div class="h-full">
                                <img
                                    :src="slide"
                                    class="w-full h-[300px] sm:h-[380px] md:h-[305px] lg:h-[420px] xl:h-[498px] 2xl:h-[498px] border-2 object-cover mb-12 rounded-t-[2rem] sm:rounded-t-[2rem] md:rounded-t-[2rem] lg:rounded-t-[3rem] xl:rounded-t-[11%] 2xl:rounded-t-[11%]"
                                />
                            </div>
                        </SwiperSlide>
                    </swiper>
                    <swiper
                        @swiper="setThumbsSwiper"
                        :spaceBetween="1"
                        :slidesPerView="5"
                        :freeMode="true"
                        :watchSlidesProgress="true"
                        :modules="modules"
                        class="relative z-30 -right-0 -top-[4.3rem] lg:-top-[4rem] xl:-top-[4rem] h-[80px] sm:h-[80px] md:h-[100px] xl:h-[245px] 2xl:h-[245px]"
                    >
                        <SwiperSlide
                            v-for="(slide, index) in slides"
                            :key="index"
                            class="swiper-thumbnail"
                        >
                            <div class="h-full w-[100px]">
                                <img
                                    :src="slide"
                                    class="h-[75px] sm:h-[70px] md:h-[60px] lg:h-[70px] xl:h-[95px] 2xl:h-[95px] w-[50px] sm:w-[50px] md:w-[60px] lg:w-[80px] xl:w-[400px] 2xl:w-[400px] relative top-3 border-2 object-cover mb-12 rounded-3xl rounded-b-3xl drop-shadow-lg"
                                />
                            </div>
                        </SwiperSlide>
                    </swiper>
                </div>
                <img
                    src="@/assets/imagens/celular-transparente-2.png"
                    class="relative w-72 sm:w-[60%] md:w-[65%] lg:w-[70%] xl:w-[80%] 2xl:w-[80%] sm:left-20 md:left-20 lg:left-24 xl:left-2 2xl:left-2 top-2 sm:-top-12 md:-top-20 lg:-top-12 xl:top-6 2xl:top-6 drop-shadow-lg inset-0"
                    alt=""
                />
            </div>
            <div
                class="relative top-8 sm:-top-4 md:-top-4 lg:-top-12 xl:-top-4 2xl:-top-4"
            >
                <h2
                    class="font-bold text-cyan-950 text-center text-2xl lg:text-4xl uppercase relative right-[12rem] sm:right-[12rem] md:right-[8rem] lg:right-[6rem] xl:right-[12rem]"
                >
                    O futuro chegou <br />
                    mais cedo!
                </h2>
                <div class="relative top-8">
                    <ul class="list-disc">
                        <li
                            class="relative right-[4.1rem] sm:right-[4.1rem] md:right-[5.4rem] lg:right-[4.9rem] xl:right-[10rem] text-cyan-950"
                        >
                            <h2
                                class="font-bold text-cyan-950 text-center text-md xl:text-xl uppercase"
                            >
                                Porto velho possui
                                <span class="font-extrabold"
                                    >coleta de resíduos sustentável</span
                                >
                                <br />pela bprimeira vez na história
                            </h2>
                        </li>
                        <br />
                        <li
                            class="relative right-[1.2rem] sm:right-[1.2rem] md:right-[3.4rem] lg:right-[1.6rem] xl:right-[6rem] 2xl:right-[6.1rem] md:-top-[1rem] lg:top-[0.2rem] text-cyan-950"
                        >
                            <h2
                                class="font-bold text-cyan-950 text-center text-md xl:text-xl uppercase"
                            >
                                <span class="font-extrabold"
                                    >Mais de 3 mil pessoas</span
                                >
                                <br />cadastrada no Sistema Nacional de Empregos
                            </h2>
                        </li>
                        <br />
                        <li
                            class="relative right-[1rem] sm:right-[1rem] md:right-[3.8rem] lg:right-[1rem] xl:right-[4.3rem] md:-top-[2rem] lg:top-[1rem] text-cyan-950"
                        >
                            <h2
                                class="font-bold text-cyan-950 text-center text-md xl:text-xl uppercase"
                            >
                                Iluminanção Pública
                                <span class="font-extrabold">Cresce 250%</span>
                                <br />e alcança
                                <span class="font-extrabold">
                                    70 mil pontos na cidade
                                </span>
                            </h2>
                        </li>
                        <br />
                        <li
                            class="relative right-[2.6rem] sm:right-[2.6rem] md:right-[6.2rem] lg:right-[2.4rem] xl:right-[4.5rem] 2xl:right-[4.3rem] md:-top-[2.5rem] lg:top-[1rem] text-cyan-950"
                        >
                            <h2
                                class="font-bold text-cyan-950 text-center text-md xl:text-xl uppercase"
                            >
                                <span class="font-extrabold"
                                    >investimento de 8 milhões</span
                                >
                                <br />para mordernizar e sincronizar semafaros
                                na região
                            </h2>
                        </li>
                        <br />
                        <li
                            class="relative right-[10rem] sm:right-[10rem] md:right-[14rem] lg:right-[8.8rem] xl:right-[6.8rem] 2xl:right-[6.2rem] md:-top-[4rem] lg:top-[2rem] text-cyan-950"
                        >
                            <h2
                                class="font-bold text-cyan-950 text-center text-md xl:text-xl uppercase"
                            >
                                Porto Velho possui a
                                <span class="font-extrabold"
                                    >frota de ônibus mais nova</span
                                >
                                <br />entre as capitais brasileiras
                            </h2>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.drop-shadow-lg {
    --tw-drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
        drop-shadow(0 4px 3px rgba(0, 0, 0, 0.4));
}
/* Exemplo de estilos para as thumbnails em arco */
.swiper-thumbnail:nth-child(1) {
    transform: translateY(-17px) rotate(-2deg);
    top: 10px;
    left: 0px;
}
.swiper-thumbnail:nth-child(2) {
    transform: translateY(-13px) rotate(-1deg);
    top: 6px;
    left: 20px;
}
.swiper-thumbnail:nth-child(3) {
    transform: translateY(-7px) rotate(0deg);
    top: 0px;
    left: 40px;
}
.swiper-thumbnail:nth-child(4) {
    transform: translateY(0px) rotate(0deg);
    top: -7px;
    left: 60px;
}
.swiper-thumbnail:nth-child(5) {
    transform: translateY(0px) rotate(0deg);
    top: -7px;
    left: 0px;
}
:deep(.swiper-pagination) {
    position: relative;
    left: 50%;
    bottom: 8px;
    transform: translatex(-50%);
    z-index: 1;
    width: auto !important;
}
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
@keyframes zoomEffect {
    0% {
        transform: scale(1);
        opacity: 0.5;
    }
    100% {
        transform: scale(1.1);
        opacity: 1;
    }
}

/* Classe de animação para a miniatura ativa */
.animate-zoom {
    animation: zoomEffect 3s ease-out forwards;
}

/* Miniaturas inativas com opacidade reduzida */
.swiper-thumbnail img {
    transition: transform 0.5s;
    transform: scale(1);
}

/* Borda amarela para a miniatura ativa */
.swiper-slide-thumb-active img {
    border-color: yellow;
    transform: scale(1.1);
}

@media screen and (min-width: 640px) {
    .swiper-thumbnail:nth-child(1) {
        transform: translateY(-17px) rotate(-2deg);
        top: 10px;
        left: 0px;
    }
    .swiper-thumbnail:nth-child(2) {
        transform: translateY(-13px) rotate(-1deg);
        top: 6px;
        left: 13px;
    }
    .swiper-thumbnail:nth-child(3) {
        transform: translateY(-7px) rotate(0deg);
        top: 0px;
        left: 26px;
    }
    .swiper-thumbnail:nth-child(4) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 38px;
    }
    .swiper-thumbnail:nth-child(5) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 0px;
    }
}
@media screen and (min-width: 768px) {
    .swiper-thumbnail:nth-child(1) {
        transform: translateY(-17px) rotate(-2deg);
        top: 10px;
        left: 0px;
    }
    .swiper-thumbnail:nth-child(2) {
        transform: translateY(-13px) rotate(-1deg);
        top: 6px;
        left: 13px;
    }
    .swiper-thumbnail:nth-child(3) {
        transform: translateY(-7px) rotate(0deg);
        top: 0px;
        left: 26px;
    }
    .swiper-thumbnail:nth-child(4) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 38px;
    }
    .swiper-thumbnail:nth-child(5) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 0px;
    }
}
@media screen and (min-width: 1024px) {
    .swiper-thumbnail:nth-child(1) {
        transform: translateY(-17px) rotate(-2deg);
        top: 10px;
        left: 0px;
    }
    .swiper-thumbnail:nth-child(2) {
        transform: translateY(-13px) rotate(-1deg);
        top: 6px;
        left: 13px;
    }
    .swiper-thumbnail:nth-child(3) {
        transform: translateY(-7px) rotate(0deg);
        top: 0px;
        left: 26px;
    }
    .swiper-thumbnail:nth-child(4) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 38px;
    }
    .swiper-thumbnail:nth-child(5) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 0px;
    }
}
@media screen and (min-width: 1280px) {
    .swiper-thumbnail:nth-child(1) {
        transform: translateY(-17px) rotate(-2deg);
        top: 10px;
        left: 0px;
    }
    .swiper-thumbnail:nth-child(2) {
        transform: translateY(-13px) rotate(-1deg);
        top: 6px;
        left: 13px;
    }
    .swiper-thumbnail:nth-child(3) {
        transform: translateY(-7px) rotate(0deg);
        top: 0px;
        left: 26px;
    }
    .swiper-thumbnail:nth-child(4) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 38px;
    }
    .swiper-thumbnail:nth-child(5) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 0px;
    }
}
@media screen and (min-width: 1536px) {
    .swiper-thumbnail:nth-child(1) {
        transform: translateY(-17px) rotate(-2deg);
        top: 10px;
        left: 0px;
    }
    .swiper-thumbnail:nth-child(2) {
        transform: translateY(-13px) rotate(-1deg);
        top: 6px;
        left: 13px;
    }
    .swiper-thumbnail:nth-child(3) {
        transform: translateY(-7px) rotate(0deg);
        top: 0px;
        left: 26px;
    }
    .swiper-thumbnail:nth-child(4) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 38px;
    }
    .swiper-thumbnail:nth-child(5) {
        transform: translateY(0px) rotate(0deg);
        top: -7px;
        left: 0px;
    }
}
</style>
