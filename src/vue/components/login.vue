<template>
  <div class="login">
    <h1 class="login-header">Login</h1>
    <form @submit.prevent="login" class="login-container">
      <div>
        <input type="text" v-model="username" placeholder="Username" />
      </div>
      <div>
        <input type="password" v-model="password" placeholder="Password" />
      </div>
      <div>
        <button type="submit">Log In</button>
      </div>
    </form>

    <div>
      Don't have an account? Unfortunately, this application is for demo
      purposes only and we are not accepting new users to this super cool web
      application at this time. Sorry! Bark!
    </div>
  </div>
</template>

<script>
import * as Cookies from "js-cookie";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let body = {
        username: this.username,
        password: this.password,
      };
      let reqBody = JSON.stringify(body);
      let res = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        body: reqBody,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*/*",
        },
      });
      let data = await res.json();
      Cookies.set("access-token", data.accessToken);
      Cookies.set("user-id", data.userId);
      this.username = "";
      this.password = "";
      console.log(this);
      this.$parent._data.userIsLoggedIn = true;
      this.$router.push("/feed");
    },
  },
};
</script>

<style></style>
