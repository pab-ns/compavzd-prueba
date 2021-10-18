<template>
  <div>
    <v-data-table :items="$store.state.courseModule.data" :headers="headers">
      <!-- chip costo -->
      <template v-slot:[`item.costo`]="{ item }">
        <v-chip color="green" text-color="white"
          >${{ item.costo.toLocaleString() }}</v-chip
        >
      </template>
      <!-- chip terminado 
      <template v-slot:item.estado="{ item }"> -->
      <template v-slot:[`item.estado`]="{ item }">
        <v-chip text-color="white" :color="item.estado ? 'primary' : 'grey'">{{
          item.estado ? "Si" : "No"
        }}</v-chip>
      </template>
      <!-- chip fecha -->
      <template v-slot:[`item.fecha_creacion`]="{ item }">
        <v-chip>{{
          item.fecha_creacion ? "item.fecha_creacion" : "Sin info."
        }}</v-chip>
      </template>

      <!-- crear actions btns -->
      <template v-slot:[`item.actions`]="{ item }">
        <div>
          <v-btn icon @click="edit(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="erase(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Firebase from "firebase";
export default {
  name: "CourseTable",
  data: () => ({
    loading: false,
    headers: [
      {
        text: "Curso",
        value: "nombre",
      },
      {
        text: "Cupos",
        value: "cupos",
      },
      {
        text: "Inscritos",
        value: "inscritos",
      },
      {
        text: "Duración",
        value: "duracion",
      },
      {
        text: "Costo",
        value: "costo",
      },
      {
        text: "Terminado",
        value: "estado",
      },
      {
        text: "Fecha",
        value: "fecha_creacion",
      },
      {
        text: "Acciones",
        value: "actions",
      },
    ],
  }),
  methods: {
    edit(item) {
      this.$router.push(`/info/${item.id}`);
      //   console.log("btn edit", item);
    },
    erase(item) {
      Firebase.firestore()
        .collection("cursos")
        .doc(item.id)
        .delete(this.course)
        .then(() => {
          this.loading = false;
          this.$store.dispatch("courseModule/getAllCourses");
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style></style>
