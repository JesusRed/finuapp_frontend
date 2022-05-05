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

export default {
  name: 'HomeView',
  components: {
    ConvsCard,
  },
  data() {
    return {
      projects: [
        {
          id: 5928101,
          disciplina: 'Ciencia y Tecnologia',
          title: 'Influencia de las TI',
          resumen:
            'Actualmente cada area de una empresa se ve afectada por el uso de tecnologia.',
          ubicacion: 'UFPS',
          fecha: 'Enero 28, 2022',
          ciudad: 'Cucuta',
          proyectoAprobado: true,
          investigador: 'Armando Paredes',
        },
        {
          id: 6541344,
          disciplina: 'Biologia y Quimica',
          title: 'Afectaciones en zonas de lluvia',
          resumen:
            'En algunas zonas del pais el agua lluvia afecta radicalmente los cultivos.',
          ubicacion: 'UFPS',
          fecha: 'Julio 8, 2022',
          ciudad: 'Ocania',
          proyectoAprobado: true,
          investigador: 'Juan Diaz',
        },
        {
          id: 1321687,
          disciplina: 'Matematicas',
          title: 'Estadisticas sin valor',
          resumen:
            'No siempre las estadisticas tiene algun valor representativo en los humanos',
          ubicacion: 'UFPS',
          fecha: 'Mayo 1, 2022',
          ciudad: 'Cucuta',
          proyectoAprobado: true,
          investigador: 'Minanda Castolo',
        },
        {
          id: 9632584,
          disciplina: 'Economia',
          title: 'Dolar de columpio',
          resumen:
            'Desde 2006 la irregularidad del dolar en los paises del tercermundo se ha visto',
          ubicacion: 'UFPS',
          fecha: 'Octubre 10, 2022',
          ciudad: 'Cucuta',
          proyectoAprobado: true,
          investigador: 'Jacob Equis',
        },
      ],
    }
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
