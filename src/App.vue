<script setup>
import { onMounted } from "vue";
</script>

<template>
    <RouterView />
</template>

<style>
html {
    scroll-behavior: smooth;
}

body::-webkit-scrollbar {
    width: 5px;
}
body::-webkit-scrollbar-track {
    background-color: #00aeef;
    border-radius: 1rem;
}
body::-webkit-scrollbar-button,
body::-webkit-scrollbar-thumb {
    background-color: #64afa6;
    border-radius: 1rem;
}
</style>
