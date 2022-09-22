<template>
  <v-table fixed-header height="300px">
    <thead>
      <tr>
        <th class="text-left">Firstname</th>
        <th class="text-left">Lastname</th>
        <th class="text-left">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.firstname }}</td>
        <td>{{ post.lastname }}</td>
        <td>{{ post.email }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
interface IPost {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export default defineComponent({
  name: "PostList",
  props: {
    posts: {
      type: Array as PropType<IPost[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
