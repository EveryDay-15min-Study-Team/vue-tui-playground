<template>
  <div class="app-wrapper">
    <div id="editor"></div>
  </div>
</template>

<script>
import Editor from 'tui-editor';

export default {
  name: 'Notepad',
  mounted() {
    this.editor = new Editor({
      el: document.querySelector('#editor'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
    });
  },
  data() {
    return {
      editor: null,
    };
  },
};
</script>

<style lang="scss" scoped>
#editor {
  flex: 1;
  margin-bottom: 60px;
}
</style>
