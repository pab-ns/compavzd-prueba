<template>
  <!-- modal -->
  <v-dialog v-model="dialog" width="700">
    <template v-slot:activator="{ on }">
      <v-btn text depressed v-on="on">
        Login
        <v-icon> mdi-login </v-icon>
      </v-btn>
    </template>
    <!-- modal open -->
    <v-card>
      <LoginForm @success="dialog = false" />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data: () => ({
    dialog: false,
  }),
  components: { LoginForm: () => import("./LoginForm.vue") },
};
</script>

<style></style>
