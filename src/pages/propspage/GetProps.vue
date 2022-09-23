<template>
  <div class="propscomp">
    <div class="title">This is child component</div>
    <v-btn @click="changeColor">change parent color</v-btn>
    <v-list>
      <v-list-item v-for="(lang, i) in langs" :key="i">
        {{ lang }}
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "GetProps",
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
      this.change();
    },
  },
});
</script>

<style lang="scss" scoped>
.propscomp {
  background-color: #ccc;
  border: 1px solid red;
}
.title {
  color: red;
}
</style>
