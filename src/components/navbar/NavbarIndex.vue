<template>
    <nav
        class="bg-gradient-to-r from-cyan-900 to-cyan-700 fixed shadow-lg w-full z-50"
    >
        <div
            class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <RouterLink to="/">
                <a
                    href="https://flowbite.com/"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        class="h-8"
                        alt="Flowbite Logo"
                    />
                    <span
                        class="self-center text-2xl font-semibold whitespace-nowrap text-white"
                    >
                        Flowbite
                    </span>
                </a>
            </RouterLink>

            <!-- Toggle Button for Mobile -->
            <Menu as="div" class="relative inline-block text-left md:hidden">
                <MenuButton
                    @click="toggleMobileMenu"
                    class="flex items-center justify-center w-10 h-10 p-2 mt-6 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                    <span class="sr-only">Open main menu</span>
                    <svg
                        class="w-10 h-10"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </MenuButton>

                <MenuItems
                    v-if="showMenu"
                    class="absolute z-10 right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <MenuItem v-for="item in menuItems" :key="item.name">
                        <a
                            :href="item.link"
                            :class="[
                                active
                                    ? 'bg-blue-500 text-white'
                                    : 'text-gray-900',
                                'block px-4 py-2 text-sm',
                            ]"
                        >
                            {{ item.name }}
                        </a>
                    </MenuItem>
                </MenuItems>
            </Menu>

            <!-- Menu for Larger Screens -->
            <div
                v-if="!showMenu"
                class="w-full md:flex md:gap-4 md:justify-between md:w-auto hidden"
            >
                <RouterLink
                    to="/"
                    class="text-white hover:text-blue-500 font-bold"
                    >Home</RouterLink
                >
                <RouterLink
                    to="/"
                    class="text-white hover:text-blue-500 font-bold"
                    >About</RouterLink
                >
                <RouterLink
                    to="/"
                    class="text-white hover:text-blue-500 font-bold"
                    >Services</RouterLink
                >
                <RouterLink
                    to="/"
                    class="text-white hover:text-blue-500 font-bold"
                    >Pricing</RouterLink
                >
                <RouterLink
                    to="/"
                    class="text-white hover:text-blue-500 font-bold"
                    >Contact</RouterLink
                >
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";
const active = ref(null);
const showMenu = ref(false);
const toggleMobileMenu = () => {
    showMenu.value = !showMenu.value;
};
function setActive(key) {
    active.value = key;
}

const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Contact", link: "/" },
];
</script>

<style scoped>
/* Optional custom styling */
</style>
