<template>
  <v-app>
    <Navbar @toggleDrawer="drawer = !drawer" />
    <Sidebar v-model="drawer" />

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import Firebase from "firebase";
export default {
  name: "App",
  components: {
    Navbar: () => import("./components/Navbar.vue"),
    Sidebar: () => import("./components/Sidebar.vue"),
  },

  data: () => ({
    drawer: false,
  }),

  methods: {},
  mounted() {
    /*
    Test firebase
    Firebase.firestore()
      .collection("cursos")
      .get()
      .then((documents) => {
        documents.forEach((document) => {
          this.cursos.push({ id: document.id, ...document.data() });
        });
      });
    */
  },
};
</script>
