<script setup>
import {provide, ref} from "vue";

const logoUrl = new URL('@/assets/images/logo.png', import.meta.url).href
const tab = ref(null)

const movies = ref([
  { id: 1, name: 'Inception', producer: 'Christopher Nolan', year: 2010 },
  { id: 2, name: 'The Dark Knight', producer: 'Christopher Nolan', year: 2008 },
  { id: 3, name: 'Interstellar', producer: 'Christopher Nolan', year: 2014 },
  { id: 4, name: 'Inception', producer: 'Christopher Nolan', year: 2010 },
  { id: 5, name: 'The Dark Knight', producer: 'Christopher Nolan', year: 2008 },
  { id: 6, name: 'Interstellar', producer: 'Christopher Nolan', year: 2014 }
])

provide('movies', movies)

provide('deleteMovie', (id) => {
  movies.value = movies.value.filter(movie => movie.id !== id)
})
</script>

<template>
  <v-app theme="dark">
    <!-- Navigation Bar -->
    <v-app-bar app dark>
      <!-- Logo and Title -->
      <v-toolbar-title class="d-flex align-center">
        <v-img
            :src="logoUrl"
            alt="Logo"
            width="100"
            height="100"
            class="ml-5"
        ></v-img>
      </v-toolbar-title>

      <!-- Spacer to push links to right -->
      <v-spacer></v-spacer>

      <!-- Navigation Links -->
      <v-tabs v-model="tab" align-tabs="end" class="mr-5">
        <v-tab to="/" exact>Home</v-tab>
        <v-tab to="/movies">Movies</v-tab>
        <v-tab to="/add">Add Movie</v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- Content -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>
