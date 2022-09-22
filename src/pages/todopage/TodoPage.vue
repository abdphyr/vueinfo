<template>
  <div>
    <form-comp @addpost="addPost" />
    <post-list :posts="posts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComp from "./FormCopm.vue";
import PostList from "./PostList.vue";
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
    FormComp,
    PostList,
  },
  methods: {
    addPost(post: IPost) {
      this.posts.push(post);
    },
  },
});
</script>

<style lang="scss" scoped></style>
