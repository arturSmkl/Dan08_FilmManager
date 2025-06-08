<script setup>
import { provide, ref } from "vue";

const logoUrl = new URL('@/assets/images/logo.png', import.meta.url).href
const tab = ref(null)

const movies = ref([
  { id: 1, name: 'Dildodyny Masturnini', producer: 'Gape Horn', year: 2024 },
  { id: 2, name: 'The Dark Knight', producer: 'Anita Dick', year: 2008 },
  { id: 3, name: 'Shaving Ryan’s Privates', producer: 'Anna Linjector', year: 2025 },
  { id: 4, name: 'Enward', producer: 'Mike Oxmall', year: 2010 },
  { id: 5, name: 'Bombini Gusini', producer: 'Ben Dover', year: 2009 },
  { id: 6, name: 'bobr', producer: 'Rafael Baroš', year: 2014 },
  { id: 7, name: 'Sakanigadyk', producer: 'Wilma Diqfit', year: 2014 },
  { id: 8, name: 'TOP 5 SIGMA MOMENTS', producer: 'Gabe Itinraw', year: 2012 },
])

let newId = movies.value.length + 2

provide('movies', movies)

provide('deleteMovie', (id) => {
  movies.value = movies.value.filter(movie => movie.id !== id)
})

provide('addMovie', (name, producer, year) => {
  const newMovie = {
    id: newId,
    name,
    producer,
    year
  }
  movies.value.push(newMovie)
  newId++
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
            width="90"
            height="90"
            class="ml-5"
        ></v-img>
      </v-toolbar-title>

      <!-- Spacer to push links to right -->
      <v-spacer></v-spacer>

      <!-- Navigation Links for Large Screens -->
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
@media (max-width: 720px) {
  .v-tab {
    padding: 0 !important;
    font-size: 10px;
    min-width: 68px !important;
  }
}
</style>
