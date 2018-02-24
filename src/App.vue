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
// tui.editor styles.
@import url('../node_modules/codemirror/lib/codemirror.css');
@import url('../node_modules/tui-editor/dist/tui-editor.css');
@import url('../node_modules/tui-editor/dist/tui-editor-contents.css');
@import url('../node_modules/highlight.js/styles/github.css');

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
  display: flex;
  flex-direction: column;
}

#app img {
  margin: 0 auto;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  width: 840px;
  flex: 1;
  margin: 0 auto;
}
</style>
