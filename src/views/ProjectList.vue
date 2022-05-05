<template>
  <h1>Convocatorias</h1>
  <div class="convs">
    <ConvsCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import ConvsCard from '@/components/ConvsCard.vue'
import ProjectService from '@/services/ProjectService.js'

export default {
  name: 'HomeView',
  components: {
    ConvsCard,
  },
  data() {
    return {
      projects: null,
    }
  },
  created() {
    ProjectService.getProjects()
      .then((response) => {
        this.projects = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.convs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
