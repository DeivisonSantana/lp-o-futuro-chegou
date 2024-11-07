<template>
    <div class="bg-gradient-to-t from-cyan-900 to-cyan-700 w-full h-full">
        <div class="flex justify-center items-center pb-12">
            <h2 class="text-white text-4xl font-bold">OBRAS</h2>
        </div>
        <div class="flex flex-col items-center text-white">
            <div class="flex flex-col items-start">
                <!-- Primeiro item -->
                <div
                    class="flex flex-col text-center relative right-16 sm:right-12 lg:right-48 xl:right-56 z-10 opacity-0 animate-fade-in delay-[0ms]"
                >
                    <div class="bg-cyan-900 p-6 rounded shadow-lg">
                        <p class="text-sm md:text-2xl xl:text-4xl">
                            Mais de
                            <span class="text-yellow-400 font-bold">800 km</span
                            ><br />
                            de
                            <span class="font-bold">asfalto novo</span><br />
                            em Porto Velho
                        </p>
                    </div>
                </div>

                <!-- Conector com borda pontilhada -->
                <div
                    class="flex flex-row-reverse w-full relative z-0 left-8 sm:left-0 -top-20 xl:left-20 xl:-top-20 delay-[400ms]"
                >
                    <div class="w-48 sm:w-96 h-24 connector-right"></div>
                </div>

                <!-- Segundo item -->
                <div
                    class="flex flex-col items-start text-center opacity-0 animate-fade-in delay-[800ms]"
                >
                    <div
                        class="bg-cyan-900 p-6 rounded shadow-lg relative z-10 -top-20 left-28 sm:left-64 lg:left-80"
                    >
                        <p class="text-sm md:text-2xl xl:text-4xl">
                            <span class="font-semibold">Nova rodoviária</span
                            ><br />
                            está
                            <span class="text-yellow-400 font-bold"
                                >80% <br />
                                concluída</span
                            >
                        </p>
                    </div>
                </div>

                <!-- Conector com borda pontilhada -->
                <div
                    class="flex w-full relative right-16 sm:right-8 lg:right-16 -top-40 z-0 delay-[1200ms]"
                >
                    <div class="w-44 sm:w-72 lg:w-96 h-24 connector-left"></div>
                </div>

                <!-- Terceiro item -->
                <div
                    class="flex flex-col items-start text-center relative right-20 sm:right-16 lg:right-48 xl:right-56 -top-40 z-10 opacity-0 animate-fade-in delay-[1600ms]"
                >
                    <div class="bg-cyan-900 p-6 rounded shadow-lg text-lg">
                        <p class="text-sm md:text-2xl xl:text-4xl">
                            <span class="text-yellow-400 font-bold"
                                >Mais de 60 km</span
                            ><br />
                            de
                            <span class="font-bold">canais limpos</span>
                            <br />
                            e <span class="font-bold">reestruturados</span>
                        </p>
                    </div>
                </div>

                <!-- Conector com borda pontilhada -->
                <div
                    class="flex flex-row-reverse z-0 relative left-0 sm:left-4 lg:left-4 md:left-12 xl:left-20 -top-64 md:-top-48 lg:-top-64 xl:-top-56 delay-[2000ms]"
                >
                    <div
                        class="w-48 sm:w-56 md:w-96 lg:w-96 h-36 sm:h-12 md:h-24 connector-right2"
                    ></div>
                </div>

                <!-- Quarto item -->
                <div
                    class="flex flex-col items-start text-center opacity-0 animate-fade-in delay-[2400ms]"
                >
                    <div
                        class="bg-cyan-900 p-6 rounded shadow-lg text-lg relative left-32 sm:left-72 lg:left-80 -top-72 sm:-top-48 lg:-top-64 xl:-top-56 z-10"
                    >
                        <p class="text-sm md:text-2xl xl:text-4xl">
                            Mais de <br />
                            <span class="text-yellow-400 font-bold">
                                60 bairros</span
                            ><br />
                            pavimentados
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
@keyframes drawTop {
    0% {
        border-top-width: 0;
        border-top-color: transparent;
    }
    50% {
        border-top-width: 1px;
        border-top-color: gray;
    }
    100% {
        border-top-width: 2px;
        border-top-color: white;
    }
}

@keyframes drawRight {
    0% {
        border-right-width: 0;
        border-right-color: transparent;
    }
    50% {
        border-right-width: 1px;
        border-right-color: gray;
    }
    100% {
        border-right-width: 2px;
        border-right-color: white;
    }
}
@keyframes drawLeft {
    0% {
        border-left-width: 0;
        border-left-color: transparent;
    }
    50% {
        border-left-width: 1px;
        border-left-color: gray;
    }
    100% {
        border-left-width: 2px;
        border-left-color: white;
    }
}
.connector-right {
    border-style: dashed;
    border-color: transparent;
    transition: linear;
    animation: drawTop 0.5s ease-out forwards 0.6s,
        drawRight 0.7s ease-out forwards 0.8s; /* Borda superior primeiro, depois borda direita */
}
.connector-left {
    border-style: dashed;
    border-color: transparent;
    transition: linear;
    animation: drawTop 0.9s ease-out forwards 1.2s,
        drawLeft 1.3s ease-out forwards 1.5s; /* Borda superior primeiro, depois borda direita */
}
.connector-right2 {
    border-style: dashed;
    border-color: transparent;
    transition: linear;
    animation: drawTop 1.2s ease-out forwards 1.5s,
        drawRight 1.5s ease-out forwards 1.8s; /* Borda superior primeiro, depois borda direita */
}
.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
}

.delay-\[0ms\] {
    animation-delay: 0ms;
}

.delay-\[400ms\] {
    animation-delay: 400ms;
}

.delay-\[800ms\] {
    animation-delay: 800ms;
}

.delay-\[1200ms\] {
    animation-delay: 1200ms;
}

.delay-\[1600ms\] {
    animation-delay: 1600ms;
}
.opacity-0 {
    opacity: 0;
}
.delay-\[2000ms\] {
    animation-delay: 2000ms;
}

.delay-\[2400ms\] {
    animation-delay: 2400ms;
}
</style>
