<template>
  <router-link
    class="project-link"
    :to="{ name: 'ProjectDetails', params: { id: project.id } }"
  >
    <div class="convs-card">
      <!-- Display event data -->
      <span> @ {{ project.investigador }} in {{ project.disciplina }}</span>
      <h4>{{ project.title }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.convs-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.convs-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.project-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
