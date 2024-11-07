import { createRouter, createWebHistory } from "vue-router";
// import { auth } from "@/firebase/index.js";
import LayoutOne from "@/layouts/LayoutOne.vue";
import Home from "@/pages/HomePage.vue";
import ErrorPage from "@/pages/ErrorPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    routes: [
        {
            path: "/",
            component: LayoutOne,
            children: [
                {
                    name: "home",
                    path: "/",
                    component: Home,
                },
            ],
        },
        {
            name: "error",
            path: "/error",
            component: ErrorPage,
        },
    ],

    scrollBehavior() {
        return { top: 0, behavior: "smooth" };
    },
});
// const dynamicRoutes = [
//     "rota-detalhes",
//     "pontos-turisticos-dashboard",
//     "pontos-turisticos",
//     "noticia-detalhes",
//     "circuito-detalhe",
// ];

// router.beforeEach(async (to, from, next) => {
//     const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
//     const isAuthenticated = await new Promise((resolve) => {
//         auth.onAuthStateChanged((user) => {
//             resolve(!!user);
//         });
//     });

//     if (requiresAuth && !isAuthenticated) {
//         console.log("Sem autenticação");
//         next("/error");
//     } else {
//         // Verifica se a rota é dinâmica
//         const isDynamicRoute = dynamicRoutes.includes(to.name);
//         if (!isDynamicRoute) {
//             // Verifica se a rota existe
//             const routeExists = router
//                 .getRoutes()
//                 .find((route) => route.path === to.path);
//             if (!routeExists) {
//                 console.log("Rota não existe");
//                 next("/error");
//             } else {
//                 next();
//             }
//         } else {
//             next();
//         }
//     }
// });

export default router;
