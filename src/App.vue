<template>
  <root-router />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RootRouter } from "./router";

export default defineComponent({
  name: "App",
  components: {
    RootRouter,
  },
});
</script>
