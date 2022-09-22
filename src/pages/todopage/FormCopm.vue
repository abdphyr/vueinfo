<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" xl="4">
          <v-text-field
            v-model="post.firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" xl="4">
          <v-text-field
            v-model="post.lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" xl="4">
          <v-text-field
            v-model="post.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-hover>
        <v-btn
          :disabled="
            !!!post.firstname ||
            !!!post.lastname ||
            !!!post.email ||
            !/.+@.+/.test(post.email)
          "
          variant="elevated"
          @click="addPost"
          color="primary"
        >
          Add post
        </v-btn>
      </v-hover>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FormComp",
  data: () => ({
    valid: true,
    nameRules: [
      (v: string) => !!v || "Name is required",
      (v: string) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    post: {
      id: Date.now(),
      firstname: "",
      lastname: "",
      email: "",
    },
  }),
  methods: {
    addPost() {
      this.$emit("addpost", this.post);
      this.post = {
        id: 0,
        firstname: "",
        lastname: "",
        email: "",
      };
    },
  },
});
</script>

<style lang="sass" scoped></style>
