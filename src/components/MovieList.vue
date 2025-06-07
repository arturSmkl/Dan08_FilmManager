<script setup>
import { inject } from 'vue'

// Inject the movies data and the delete function from the parent
const movies = inject('movies')
const deleteMovie = inject('deleteMovie')

// Function to handle movie deletion
const handleDelete = (id) => {
  if (deleteMovie) {
    deleteMovie(id)
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="4" md="3">
        <v-card>
          <v-card-title class="bg-blue-grey-lighten-3">{{ movie.name }}</v-card-title>
          <v-card-subtitle class="mt-4">
            <div>{{ movie.producer }} | {{ movie.year }}</div>
          </v-card-subtitle>
          <v-card-actions>
            <v-btn @click="handleDelete(movie.id)" color="red">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
