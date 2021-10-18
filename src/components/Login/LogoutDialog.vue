<template>
  <v-btn text depressed>
    {{
      $store.state.loginModule.user
        ? $store.state.loginModule.user.email
        : "No existe"
    }}
    <v-icon right>mdi-logout</v-icon>
  </v-btn>
</template>

<script>
export default {};
</script>

<style></style>
