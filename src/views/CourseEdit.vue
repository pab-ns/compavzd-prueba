<template>
  <div>
    <h1 class="my-5">
      Editar Curso: <br />
      {{ $route.params.id }}
    </h1>

    <v-form @submit.prevent="saveEdit" ref="formulario">
      <v-text-field
        :disabled="loading"
        v-model="course.nombre"
        label="Nombre"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model.number="course.cupos"
        type="number"
        label="Cupos"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model.number="course.inscritos"
        type="number"
        label="Inscritos"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model="course.duracion"
        label="Duración"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model.number="course.costo"
        type="number"
        label="Costos"
      ></v-text-field>
      <v-switch
        :disabled="loading"
        v-model="course.estado"
        label="Estado / Terminado"
      ></v-switch>

      <v-btn type="submit" color="success" :loading="loading">Guardar</v-btn>
    </v-form>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  beforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection("cursos")
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((viewModel) => {
          viewModel.course = { id: document.id, ...document.data() };
        });
      });
  },
  data: () => ({
    course: {},
    loading: false,
  }),
  methods: {
    saveEdit() {
      if (this.$refs.formulario.validate()) {
        // console.log("save form");
        this.loading = true;
        Firebase.firestore()
          .collection("cursos")
          .doc(this.course.id)
          .update(this.course)
          .then(() => {
            this.loading = false;
            this.$router.push("/info");
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style></style>
