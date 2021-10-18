<template>
  <v-container>
    <v-form ref="formFieldInput" @submit.prevent="formSubmit">
      <h2>Login</h2>
      <p>Inicia sesión con tus credenciales o crea una cuenta para acceder.</p>
      <v-text-field
        label="E-mail"
        type="email"
        v-model="form.email"
        :rules="[required]"
      ></v-text-field>
      <v-text-field
        label="Contraseña"
        type="password"
        v-model="form.pass"
        :rules="[required]"
      ></v-text-field>
      <v-layout justify-space-around>
        <v-btn color="success" type="submit">Entrar</v-btn>
        <v-btn color="amber" type="button" @click="resetValidation"
          >Reinicar Validación</v-btn
        >
        <v-btn color="error" type="reset" @click="resetForm">Reiniciar</v-btn>
      </v-layout>
    </v-form>
  </v-container>
</template>

<script>
import Firebase from "firebase";
export default {
  name: "LoginForm",
  data: () => ({
    form: { email: "", pass: "" },
  }),
  methods: {
    async formSubmit() {
      if (this.$refs.formFieldInput.validate()) {
        try {
          await Firebase.auth().signInWithEmailAndPassword(
            this.form.email,
            this.form.pass
          );
          //   console.log("all good");
          //   console.log(userLoginForm);
          Firebase.auth().currentUser;
          this.$store.dispatch(
            "loginModule/configUser",
            Firebase.auth().currentUser
          );
          this.$emit("success");
        } catch (e) {
          console.error("no good");
        }
      }
    },
    resetValidation() {
      this.$refs.formFieldInput.resetValidation();
    },
    resetForm() {
      this.$refs.formFieldInput.reset();
    },
    required(value) {
      return !!value || "Completa este campo";
    },
  },
};
</script>

<style></style>
