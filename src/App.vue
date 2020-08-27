<template>
  <div id="app">
    <tiptap-editor></tiptap-editor>
  </div>
</template>

<script>
import TiptapEditor from './components/TiptapEditor'



export default {
  name: 'App',
  mounted () {
    // this.createDocument()
  },
  components: {
    TiptapEditor
  },
  methods: {
    createDocument () {
      const htmlString = `<div><p><img src="https://cdn.meeple.link/uploads/5f43ae380074eb0007fb30bc.jpeg"></p></div>`
      const parser = new window.DOMParser()
      const element = parser.parseFromString(htmlString, 'text/html').body.firstElementChild
      console.log(element)
      // return DOMParser.fromSchema(this.schema).parse(element, {})
    }
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
