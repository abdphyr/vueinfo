<template>
  <div>
    <create-todo @addpost="addPost" />
    <list-todo :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CreateTodo from "./CreateTodo.vue";
import ListTodo from "./ListTodo.vue";
interface IPost {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}

export default defineComponent({
  name: "TodoPage",
  data() {
    return {
      posts: [
        {
          id: Date.now(),
          firstname: "Olim",
          lastname: "Olimov",
          email: "olim@olimov.com",
        },
      ],
    };
  },
  components: {
    CreateTodo,
    ListTodo,
  },
  methods: {
    addPost(post: IPost) {
      this.posts.push(post);
    },
  },
});
</script>

<style lang="scss" scoped></style>
