<template>
  <img :src="src"/>
</template>

<script>
export default {
  props: ['node'],
  computed: {
    src () {
      console.log(this.node.attrs.src)
      return this.node.attrs.src + '?w=780'
    }
  }
}
</script>