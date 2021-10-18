<template>
  <v-navigation-drawer :value="value" @input="$emit('input', $event)" app>
    <v-list rounded>
      <v-list-item-group v-model="selectedItem" color="purple">
        <v-list-item v-for="(item, i) in items" :key="i" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "Home", icon: "mdi-home", to: "/" },
      { text: "Cursos", icon: "mdi-apps", to: "/cursos" },
      { text: "Información", icon: "mdi-information", to: "/info" },
    ],
  }),
  props: ["value"],
};
</script>

<style></style>
