<template>
  <div :class="isDark ? 'dark' : 'light'">
    <h2>This is parent component</h2>
    <v-input v-model="text" type="text" ref="reffer" placeholder="input" />
    <br />
    <br />
    <h5>{{ text }}</h5>
  </div>
  <get-props :change="changeColor" :langs="languages" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GetProps from "./GetProps.vue";

export default defineComponent({
  name: "PropsPage",
  components: {
    GetProps,
  },
  data() {
    return {
      isFav: false,
      text: "",
      languages: ["JS", "TS", "Go"],
      isDark: false,
    };
  },
  methods: {
    mouseOver() {
      this.isFav = !this.isFav;
      console.log(this.$refs);
    },
    changeColor() {
      this.isDark = !this.isDark;
    },
  },
  computed: {
    newTitle() {
      return "Nmae";
    },
  },
});
</script>

<style lang="scss" scoped>
.btn {
  background-color: rgb(20, 18, 18);
  color: coral;
  border-radius: 5px;
  border: none;
  transform: scale(1.1);
}
.dark {
  background-color: rgb(28, 79, 101);
}
.light {
  background-color: rgb(170, 156, 156);
}
</style>
