import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import MovieList from "@/components/MovieList.vue";

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/movies', component: MovieList, name: 'MovieList' }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
