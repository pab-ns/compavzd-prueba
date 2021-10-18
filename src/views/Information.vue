<template>
  <div>
    <v-layout>
      <h1 class="my-5">Información Cursos</h1>
      <v-spacer></v-spacer>
      <v-btn class="my-5 primary" to="/info/agregar"> Agregar </v-btn>
    </v-layout>

    <hr />

    <CourseTable />
    <CourseSummary />

    <router-view></router-view>
  </div>
</template>

<script>
import Store from "../store";
export default {
  name: "CourseInfo",
  components: {
    CourseTable: () => import("../components/Courses/CourseTable.vue"),
    CourseSummary: () => import("../components/Courses/CourseSummary.vue"),
  },
  beforeRouteEnter(to, from, next) {
    Store.dispatch("courseModule/getAllCourses");
    next();
  },
};
</script>

<style></style>
