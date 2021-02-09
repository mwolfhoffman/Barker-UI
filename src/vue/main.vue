<template>
  <div id="app">
    <ul>
      <li><router-link :to="'/'">BARKER</router-link></li>
      <li><router-link :to="'/feed'">Feed</router-link></li>
      <li><router-link :to="'profile'">Profile</router-link></li>
      <li class="right" v-if="!userIsLoggedIn">
        <router-link :to="'login'">Login</router-link>
      </li>
      <li class="right" v-if="userIsLoggedIn" @click.prevent="logout()">
        <a>Logout</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import * as Cookie from "js-cookie";
export default {
  name: "App",
  data() {
    return {
      userIsLoggedIn: false,
    };
  },
  mounted() {
    let accessToken = Cookie.get("access-token", { path: "*" });
    this.userIsLoggedIn = !!accessToken;
  },
  methods: {
    logout() {
      Cookie.remove("access-token");
      Cookie.remove("user-id");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
@import "../site.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #23272b;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #28d;
}
li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
li.right {
  float: right;
}
</style>
