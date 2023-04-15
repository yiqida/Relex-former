<template>
  <div class="editor-page-wrapper">
    <div class="nav-header"></div>
    <div class="editor-container">
      <div class="left-comps-container"></div>
      <div class="center-editor">
      </div>
      <div class="right-edited-container"></div>
    </div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>

<style lang="scss">
$nav-height: 1rem;

.editor-page-wrapper {
  border: 1px red solid;
  .nav-header {
    height: $nav-height;
  }
  .editor-container {
    display: flex;
    min-height: calc(100vh - $nav-height);
    .left-comps-container {
      border: 1px blueviolet solid;
      width: 2.6rem;
    }
    .center-editor {
      border: 1px hotpink solid;
      width: 13.56rem;
    }
    .right-edited-container {
      border: 1px forestgreen solid;
      width: 3rem;
    }
  }
}
</style>