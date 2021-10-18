<template>
  <div>
    <v-card class="mx-auto my-12">
      <v-img :contain="true" :src="value.imagen"> </v-img>

      <v-card-text class="py-0 grey lighten-4">
        <v-card-text
          ><h2>{{ value.nombre }}</h2></v-card-text
        >
        <v-card-text><h4>Información</h4></v-card-text>
        <v-timeline align-top dense>
          <!-- costo / duracion -->
          <v-timeline-item color="purple" small>
            <v-row class="pt-1">
              <v-col>
                <div class="text-caption">
                  <strong>Costo:</strong> {{ value.costo }}
                </div>
                <div class="text-caption">
                  <strong>Duración:</strong> {{ value.duracion }}
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
          <!-- cupos -->
          <v-timeline-item color="green" small>
            <v-row class="pt-1">
              <v-col>
                <div class="text-caption">
                  <strong>Cupos:</strong> {{ value.cupos }}
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
          <!-- inscritos -->
          <v-timeline-item color="purple" small>
            <v-row class="pt-1">
              <v-col>
                <div class="text-caption">
                  <strong>Inscritos:</strong> <br />
                  {{ value.inscritos }}
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
          <!-- descripcion -->
          <v-timeline-item color="green" small>
            <v-row class="pt-1">
              <v-col>
                <div class="text-caption">
                  <strong>Descripción: </strong> <br />
                  {{ value.descripcion }}
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
          <!-- estado -->
          <v-timeline-item color="purple" small>
            <v-row class="pt-1">
              <v-col>
                <div class="text-caption">
                  <strong>Completado: </strong> <br />
                  {{ value.estado ? "Si" : "No" }}
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CourseViewCard",
  props: ["value"],
};
</script>

<style></style>
