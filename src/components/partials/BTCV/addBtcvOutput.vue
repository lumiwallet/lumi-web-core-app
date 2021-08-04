<template lang="pug">
  .add-input
    .add-input__row
      label Bitcoin Vault address
      input(v-model="output.address" type="text" placeholder="Enter dogecoin address")
    .add-input__row
      label Amount in satoshi
      input(v-model="output.value" type="text" placeholder="0")
    .add-input__row
      error(:show="!!error") {{ error }}
      button(@click="addOutput") {{ action }} output
</template>

<script>
  import error from '@/components/ui/error'
  
  export default {
    name: 'add-btcv-output',
    components: {
      error
    },
    props: {
      action: {
        type: String,
        default: 'Add'
      }
    },
    data () {
      return {
        output: {
          address: '',
          value: '',
          id: ''
        },
        error: null
      }
    },
    methods: {
      addOutput () {
        if (this.validate()) {
          if (this.action === 'Add') {
            this.output.id = this.getId()
            this.$emit('add_outputs', 'outputs', this.output)
          } else {
            this.$emit('update_outputs', 'outputs', this.output)
          }
        }
      },
      validate () {
        for (let key in this.output) {
          if (!this.output[key] && key !== 'id') {
            this.error = 'All fields are required'
            return false
          }
        }
        this.output.value = parseInt(this.output.value)
        this.error = null
        return true
      },
      getId () {
        return `f${(+new Date).toString(16)}`
      }
    },
    mounted () {
      this.$root.$on('edit_outputs', data => {
        this.output = data
      })
    },
    beforeDestroy () {
      this.$root.$off('edit_outputs')
    }
  }
</script>
