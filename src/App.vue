<template>
  <v-container>
    <nav-bar />
    <root-router />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RootRouter } from "./router";
import { NavBar } from "./layout";

export default defineComponent({
  name: "App",
  components: {
    RootRouter,
    NavBar,
  },
});
</script>
