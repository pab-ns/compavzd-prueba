<template>
  <div>
    <h1 class="my-5">Agregar Curso:</h1>

    <v-form @submit.prevent="saveChanges" ref="formulario">
      <v-text-field
        :disabled="loading"
        v-model="course.nombre"
        label="Nombre"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model.number="course.cupos"
        type="number"
        label="Cupos"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model.number="course.inscritos"
        type="number"
        label="Inscritos"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model="course.duracion"
        label="Duración"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model.number="course.costo"
        type="number"
        label="Costos"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        :disabled="loading"
        v-model="course.imagen"
        label="Imagen"
        :rules="[required]"
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
  name: "CourseAdd",

  data: () => ({
    loading: false,
    course: {
      nombre: "",
      cupos: 0,
      inscritos: 0,
      duracion: "",
      costo: 0,
      estado: false,
      imagen: "",
    },
  }),
  methods: {
    saveChanges() {
      if (this.$refs.formulario.validate()) {
        // console.log("agregar curso", this.course);
        Firebase.firestore()
          .collection("cursos")
          .add(this.course)
          .then(() => {
            this.loading = false;
            this.$router.push("/info");
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
    required(value) {
      return !!value || "Completar campo";
    },
  },
};
</script>

<style></style>
