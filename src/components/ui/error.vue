<template lang="pug">
  .error(v-if="show")
    slot
</template>

<script>
  export default {
    name: 'error',
    props: {
      show: {
        type: Boolean,
        default: false
      }
    },
    watch: {},
    data () {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .error {
  
  }
</style>
