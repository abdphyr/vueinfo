<template>
  <div class="propscomp">
    <div class="title">Bu child component</div>
    <button @click="changeColor">customevent</button>
    <ul>
      <li v-for="lang in langs" v-bind:key="langs.indexOf(lang)">
        {{ lang }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "PropsVue",
  props: {
    langs: {
      type: Array as PropType<Array<string>>,
      required: true,
    },
    change: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  methods: {
    changeColor() {
      //this.change();
      this.$emit("chcolor", "red");
    },
  },
});
</script>

<style lang="scss" scoped>
.propscomp {
  background-color: #ccc;
}
.title {
  color: red;
}
</style>
