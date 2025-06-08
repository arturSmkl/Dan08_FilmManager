import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import MovieList from "@/components/MovieList.vue";
import AddMovie from "@/components/AddMovie.vue";

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/movies', component: MovieList, name: 'MovieList' },
    { path: '/add', component: AddMovie, name: 'AddMovie' }
]

const router = createRouter({
    history: createWebHistory('/Dan08_FilmManager/'),
    routes
})

export default router
