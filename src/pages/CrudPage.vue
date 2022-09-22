<template>
  <div>
    <FormComp @addpost="addPost" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormComp from "../components/FormCopm.vue";

export default defineComponent({
  name: "CrudPage",
  components: {
    FormComp,
  },
  methods: {
    addPost(post: { firstname: string; lastname: string; email: string }) {
      console.log(post.email);
    },
  },
});
</script>

<style lang="scss" scoped></style>
