import { createRouter, createWebHashHistory } from "vue-router";
const routeHistory = createWebHashHistory();

// Переименовали компоненты в многословные имена (добавили Page/Postfix)
import HomePage from "@/pages/HomePage";      // Файл переименован в HomePage.vue
import AboutPage from "@/pages/AboutPage";    // Файл переименован в AboutPage.vue
import NotFoundPage from "@/pages/NotFoundPage"; // Файл переименован в NotFoundPage.vue

const router = createRouter({
    history: routeHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage // Используем обновлённое имя компонента
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: "/:CatchAll(.*)",
            name: 'notFound', // Изменили имя для соответствия конвенции
            component: NotFoundPage
        }
    ]
})

export default router; // Исправлена опечатка (было routers)