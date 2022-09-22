<template>
  <ul class="n-list">
    <li @click="litem = 0" :class="`n-list-item ${litem === 0 && 'active'}`">
      <router-link to="/">Home</router-link>
    </li>
    <li @click="litem = 1" :class="`n-list-item ${litem === 1 && 'active'}`">
      <router-link to="/vuetify">Vuetify</router-link>
    </li>
    <li @click="litem = 2" :class="`n-list-item ${litem === 2 && 'active'}`">
      <router-link to="/test">Test</router-link>
    </li>
    <li @click="litem = 3" :class="`n-list-item ${litem === 3 && 'active'}`">
      <router-link to="/todo">Todo</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      litem: 0,
    };
  },
});
</script>

<style lang="scss" scoped>
ul.n-list {
  display: flex;
  justify-content: space-around;
  background: #ccc;
  padding: 10px;
  border-radius: 10px;
  li.n-list-item {
    list-style-type: none;
    transition: all 0.3s ease;
    &.active {
      background: white;
      padding: 0 10px;
      border-radius: 0 10px;
    }
    a {
      text-decoration: none;
      color: blue;
    }
  }
}
</style>
