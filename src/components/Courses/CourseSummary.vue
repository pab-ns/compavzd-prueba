<template>
  <div>
    <v-alert dense outlined color="purple">
      Cantidad de alumnos permitidos: <strong>190</strong> alumnos.
    </v-alert>
    <v-alert dense outlined color="blue">
      Cantidad total de alumnos inscritos:
      <!-- <strong>{{ $store.getters.courseModule.alumnosInscritos }}</strong> -->
      alumnos.
    </v-alert>
    <v-alert dense outlined color="orange">
      Cantidad total de cupos restantes:
      <strong>{{}}</strong>
      alumnos.
    </v-alert>
    <v-alert dense outlined color="pink">
      Cantidad total de cursos terminados:
      <strong>{{}}</strong>
      alumnos.
    </v-alert>
    <v-alert dense outlined color="grey">
      Cantidad total de cursos activos:
      <strong>{{}}</strong>
      cursos.
    </v-alert>
    <v-alert dense outlined color="orange">
      Cantidad total de cursos:
      <strong>{{ $store.state.courseModule.data.length }}</strong>
      cursos.
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "CourseSummary",
};
</script>

<style></style>
