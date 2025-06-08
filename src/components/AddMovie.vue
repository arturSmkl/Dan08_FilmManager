<script setup>
import { ref, inject } from 'vue'

// Inject the addMovie function from App.vue
const addMovie = inject('addMovie')

// Reactive data for form fields
const name = ref('')
const producer = ref('')
const year = ref('')

// Function to handle the form submission
const handleSubmit = () => {
  if (name.value && producer.value && year.value) {
    // Call the addMovie function from the parent
    addMovie(name.value, producer.value, parseInt(year.value))

    // Reset form
    name.value = ''
    producer.value = ''
    year.value = ''
  }
}
</script>

<template>
  <v-container style="max-width: 720px">
    <v-form @submit.prevent="handleSubmit">
      <v-text-field
          v-model="name"
          label="Movie Name"
          required
      ></v-text-field>

      <v-text-field
          v-model="producer"
          label="Producer"
          required
      ></v-text-field>

      <v-text-field
          v-model="year"
          label="Year of Release"
          type="number"
          required
      ></v-text-field>

      <v-btn type="submit" color="primary">Add Movie</v-btn>
    </v-form>
  </v-container>
</template>

<style scoped>

</style>
