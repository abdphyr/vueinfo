<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/vuetify">Vuetify</router-link>
    <router-link to="test">Test</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped></style>
