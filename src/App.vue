<template>
  <v-container>
    <nav-bar />
    <router-view />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./layout/NavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
});
</script>
