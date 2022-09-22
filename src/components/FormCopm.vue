<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="post.firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="post.lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="post.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="addPost" color="primary">Submit</v-btn>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FormComp",
  data: () => ({
    valid: false,
    nameRules: [
      (v: string) => !!v || "Name is required",
      (v: string) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    post: {
      firstname: "",
      lastname: "",
      email: "",
    },
  }),
  methods: {
    addPost() {
      this.$emit("addpost", this.post);
    },
  },
});
</script>

<style lang="sass" scoped></style>
