<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
// normalize.css load.
@import url("../node_modules/normalize.css/normalize.css");

%app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}

html {
  @extend %app;
}

body {
  @extend %app;
}

#app {
  @extend %app;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
