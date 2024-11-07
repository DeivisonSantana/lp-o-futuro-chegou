<script setup>
import backgroundImage from "@/assets/imagens/escola.png";
</script>
<template>
    <div class="w-full h-full p-4 bg-cyan-600 relative">
        <div class="flex justify-center items-center p-12">
            <h2 class="text-white font-extrabold text-center text-4xl">
                EDUCAÇÃO
            </h2>
        </div>
        <div class="flex justify-center items-center">
            <img :src="backgroundImage" alt="imagem-escola" class="relative" />
        </div>
        <div class="flex justify-center items-center">
            <img
                :src="backgroundImage"
                alt="imagem-escola"
                class="absolute z-0 scale-y-[-1] top-72 opacity-5"
            />
        </div>
        <div class="relative z-10">
            <div
                class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 max-w-screen-lg mx-auto"
            >
                <!-- Card 1 -->
                <div
                    class="bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:transition hover:duration-700 hover:ease-in-out"
                >
                    <div class="pb-20 border-b-2 border-yellow-600 text-center">
                        <p class="text-xl font-semibold text-gray-900">
                            <span class="font-bold"> 95% das crianças </span>
                            do 3º ano são
                            <span class="font-bold"> alfabetizadas </span> na
                            idade certa.
                        </p>
                    </div>
                </div>

                <!-- Card 2 -->
                <div
                    class="bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:transition hover:duration-700 hover:ease-in-out"
                >
                    <div class="pb-8 border-b-2 border-yellow-600 text-center">
                        <p class="text-xl font-semibold text-gray-900">
                            Porto Velho possui a
                            <span class="font-bold"
                                >maior frota de ônibus escolares do país</span
                            >, transportando mais de 6.300 alunos diariamente.
                        </p>
                    </div>
                </div>

                <!-- Card 3 -->
                <div
                    class="bg-white shadow-md rounded-lg p-4 hover:scale-105 hover:transition hover:duration-700 hover:ease-in-out"
                >
                    <div class="pb-14 border-b-2 border-yellow-600 text-center">
                        <p class="text-xl font-semibold text-gray-900">
                            Mais de
                            <span class="font-bold"
                                >700 novos servidores contratados</span
                            >
                            para a rede pública de ensino.
                        </p>
                    </div>
                </div>

                <!-- Card 4 -->
                <div
                    class="bg-white shadow-md rounded-lg p-6 row-span-2 items-center justify-center flex hover:scale-105 hover:transition hover:duration-700 hover:ease-in-out"
                >
                    <div class="pb-14 border-b-2 border-yellow-600 text-center">
                        <p class="text-xl font-semibold text-gray-900">
                            Mais de
                            <span class="font-bold">520 estudantes</span>
                            recebem
                            <span class="font-bold"> bolsas integrais </span
                            >pela
                            <span class="font-bold">
                                Faculdade da Prefeitura de Porto Velho.</span
                            >
                        </p>
                    </div>
                </div>

                <!-- Card 5 -->
                <div
                    class="bg-white shadow-md rounded-lg p-6 hover:scale-105 hover:transition hover:duration-700 hover:ease-in-out"
                >
                    <div class="pb-14 border-b-2 border-yellow-600 text-center">
                        <p class="text-xl font-semibold text-gray-900">
                            R$
                            <span class="font-bold">
                                12 milhões investidos
                            </span>
                            para promover a
                            <span class="font-bold">merenda escolar</span>.
                        </p>
                    </div>
                </div>

                <!-- Card 6 -->
                <div
                    class="bg-white shadow-md rounded-lg p-6 hover:scale-105 hover:transition hover:duration-700 hover:ease-in-out"
                >
                    <div class="pb-14 border-b-2 border-yellow-600 text-center">
                        <p class="text-xl font-semibold text-gray-900">
                            Mais de
                            <span class="font-bold">43 mil alunos</span>
                            recebem
                            <span class="font-bold">kits escolares </span>
                            anualmente.
                        </p>
                    </div>
                </div>

                <!-- Card 7 -->
                <div
                    class="bg-white shadow-md rounded-lg p-6 hover:scale-105 hover:transition hover:duration-700 hover:ease-in-out"
                >
                    <div class="pb-28 border-b-2 border-yellow-600 text-center">
                        <p class="text-xl font-semibold text-gray-900">
                            Mais de
                            <span class="font-bold">140 escolas reformadas</span
                            >.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
/* img {
    cursor: pointer;
    object-fit: contain;
    border-radius: 10px;
    transition: all 0.5s;
    -webkit-box-reflect: below 3px
        linear-gradient(transparent, transparent, #0004);
    transform: perspective(800px) rotateY(24deg);
} */
</style>
