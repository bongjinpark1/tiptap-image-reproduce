<template>
  <div id="app">
    <tiptap-editor></tiptap-editor>
  </div>
</template>

<script>
import TiptapEditor from './components/TiptapEditor'

export default {
  name: 'App',
  components: {
    TiptapEditor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 100%
}
</style>
