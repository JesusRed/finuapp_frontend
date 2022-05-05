<template>
  <div class="convs-card">
    <!-- Display event data -->
    <span> @ {{ project.investigador }} in {{ project.disciplina }}</span>
    <h4>{{ project.title }}</h4>
  </div>
</template>

<script>
export default {
  name: 'ConvsCard',
  props: {
    project: Object,
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
</style>
