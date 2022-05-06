<template>
  <div v-if="project">
    <h1>{{ project.title }}</h1>
    <p>
      {{ project.investigador }} in {{ project.ciudad }} @
      {{ project.ubicacion }}
    </p>
    <p>{{ project.resumen }}</p>
  </div>
</template>

<script>
import ProjectService from '@/services/ProjectService.js'
export default {
  props: ['id'],
  data() {
    return {
      project: null,
    }
  },
  created() {
    // fetch event (by id) and set local data
    ProjectService.getProject(this.id)
      .then((response) => {
        this.project = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style></style>
