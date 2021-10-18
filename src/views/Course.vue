<template>
  <div>
    <h1 class="my-5">Lista de Cursos</h1>
    <hr />
    <v-row>
      <v-col
        v-for="course in $store.state.courseModule.data"
        :key="course.id"
        cols="12"
        md="4"
        sm="6"
      >
        <CourseViewCard :value="course" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Store from "../store";
export default {
  name: "Cursos",
  mounted() {
    // this.$store.dispatch("courseModule/getAllCourses");
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("courseModule/getAllCourses");
    next();
  },
  components: {
    CourseViewCard: () => import("../components/Courses/CourseViewCard.vue"),
  },
};
</script>

<style></style>
