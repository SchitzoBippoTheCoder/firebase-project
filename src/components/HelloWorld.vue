<template>
  <input type="email" placeholder="E-mail" v-model="email">
  <br>
  <input type="password" placeholder="Password" v-model="password">
  <br>
  <input type="button" value="Submit" @click="submitUserInfo()">
</template>

<script setup>
import { ref } from "vue";
import { auth } from "../firebase/index.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");

function submitUserInfo(){
  createUserWithEmailAndPassword(auth, email.value, password.value);
}

</script>

<style scoped>

</style>
