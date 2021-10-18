<template>
  <v-app-bar app color="purple" dark>
    <v-app-bar-nav-icon @click="$emit('toggleDrawer')"></v-app-bar-nav-icon>
    <v-toolbar-title>Cursos AlfaWeb</v-toolbar-title>
    <v-spacer></v-spacer>

    <LoginDialog v-show="!$store.state.loginModule.user" />
    <LogoutDialog v-show="$store.state.loginModule.user" />

    <!-- <template v-if="$store.state.loginModule.user">
      <LogoutDialog />
    </template>
    <template v-else>
      <LoginDialog />
    </template> -->
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  components: {
    LoginDialog: () => import("./Login/LoginDialog.vue"),
    LogoutDialog: () => import("./Login/LogoutDialog.vue"),
  },
};
</script>

<style></style>
