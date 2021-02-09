<template>
  <div>
    <div>
      <div class="login">
        <div class="login-header">
          <h1>Barker</h1>
        </div>
      </div>

      <h4>It's Twitter... but for dogs.</h4>
    </div>

    <p>
      This super cool web application is an experiment with front end
      microservices!
    </p>
    <p>
      <em
        >Because if there is anything dogs love, it's Twitter and
        Microservices!</em
      >
    </p>

    <button @click.prevent="redirectToLogin()">
      <h3>Login to get started!</h3>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
