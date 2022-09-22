<template>
  <div :class="isDark && 'dark'">
    <div>This is test component</div>
    <h4>{{ title }}</h4>
    <button
      :class="isFav && 'btn'"
      @mouseover="mouseOver()"
      @mouseleave="mouseOver()"
      @click="changeTitle('New title')"
    >
      changeTitle
    </button>
    <br />
    <br />
    <img :src="title" :alt="title" />
    <br />
    <br />
    <a :href="`${title}`">{{ newTitle }}</a>
    <br />
    <br />
    <input v-model="text" type="text" ref="reffer" />
    <br />
    <br />
    <h5>{{ text }}</h5>
  </div>
  <PropsComp :change="changeColor" :langs="languages" @chcolor="changeColor" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PropsComp from "./PropsComp.vue";

export default defineComponent({
  components: {
    PropsComp,
  },
  data() {
    return {
      title: "This is component title",
      age: 25 as string | number,
      isFav: false,
      text: "",
      languages: ["JS", "TS", "Go"],
      isDark: false,
    };
  },
  methods: {
    changeTitle(text: string) {
      this.title = text;
    },
    changeAge(age: string) {
      this.age = age;
    },
    mouseOver() {
      this.changeTitle("Mouse");
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
</style>
