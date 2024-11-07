<script setup>
import TimelineAnimated from "./TimelineAnimated.vue";
import { ref } from "vue";
const player = ref(null);
</script>

<template>
    <div class="bg-cyan-700 w-full h-full">
        <div class="flex-col items-center justify-center">
            <div class="w-full flex items-center justify-center">
                <!-- <vue-plyr>
                    <div
                        data-plyr-provider="youtube"
                        data-plyr-embed-id="xAR6N9N8e6U"
                        class="w-[320px] md:w-1/2 h-[280px] 2xl:h-[640px] border-solid border-4 border-yellow-500 rounded"
                    ></div>
                </vue-plyr> -->
                <div class="video-wrapper">
                    <vue-plyr ref="player" :options="{ clickToPlay: true }">
                        <div class="plyr__video-embed">
                            <iframe
                                src="https://www.youtube.com/embed/xAR6N9N8e6U?rel=0&autoplay=1"
                                allowfullscreen
                                allowtransparency
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </vue-plyr>
                </div>

                <!-- <iframe
                    src="https://www.youtube.com/embed/xAR6N9N8e6U?si=9swGHyI488LBHam_"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                    class="w-[320px] md:w-1/2 h-[280px] 2xl:h-[640px] border-solid border-4 border-yellow-500 rounded"
                ></iframe> -->
            </div>
            <div class="w-full md:pt-12 overflow-hidden">
                <TimelineAnimated />
            </div>
        </div>
    </div>
</template>
<style scoped>
:deep(.plyr__video-embed) {
    width: 1280px;
    border: solid yellow 2px;
    border-radius: 2rem;
}
:deep(.plyr--video) {
    background: yellow;
    overflow: hidden;
    border-radius: 2rem;
}
:deep(.plyr__control--overlaid) {
    background: red;
}

.video-wrapper {
    position: relative;
    display: inline-block;
}

@media screen and (max-width: 1390px) {
    :deep(.plyr__video-embed) {
        width: 920px;
    }
}
@media screen and (max-width: 960px) {
    :deep(.plyr__video-embed) {
        width: 720px;
    }
}
@media screen and (max-width: 720px) {
    :deep(.plyr__video-embed) {
        width: 460px;
    }
}
@media screen and (max-width: 480px) {
    :deep(.plyr__video-embed) {
        width: 320px;
    }
}
</style>
