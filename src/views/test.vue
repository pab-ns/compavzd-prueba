<template>
  <div>
    <h1>Test</h1>

    <v-layout row>
      <v-flex
        shrink
        v-for="course in $store.state.courseModule.data"
        :key="course.id"
      >
        {{ course }}
      </v-flex>
    </v-layout>

    <!-- Cards -->
    <v-card class="mx-auto" max-width="400">
      <v-card dark flat>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
          gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
        >
        </v-img>
      </v-card>
      <v-card-text class="py-0">
        <v-card-text><h3>Hola</h3></v-card-text>
        <v-timeline align-top dense>
          <v-timeline-item color="pink" small>
            <v-row class="pt-1">
              <v-col>
                <strong>New Icon</strong>
                <div class="text-caption">Mobile App</div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
