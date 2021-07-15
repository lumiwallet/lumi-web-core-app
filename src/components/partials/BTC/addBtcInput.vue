<template lang="pug">
  .add-input
    .add-input__row
      label {{isSegwit? 'Segwit': 'Legacy'}} bitcoin address
      input(v-model="input.address" type="text" placeholder="Enter bitcoin address" )
    .add-input__row
      label Amount in satoshi
      input(v-model="input.value" type="text" placeholder="0")
    .add-input__row
      label Index
      input(v-model="input.index" type="text" placeholder="0")
    .add-input__row(v-if="!isSegwit")
      label Raw Tx
      input(v-model="input.tx" type="text" placeholder="Enter hex")
    .add-input__row
      label Transaction hash
      input(v-model="input.hash" type="text" placeholder="Enter hash")
    .add-input__row
      label Private key (WIF)
      input(v-model="input.key" type="text" placeholder="Enter private key")
    .add-input__row
      error(:show="!!error") {{ error }}
      button(@click="addInput") {{ action }} input
</template>

<script>
  import error from '@/components/ui/error'
  
  export default {
    name: 'add-btc-input',
    components: {
      error
    },
    props: {
      action: {
        type: String,
        default: 'Add'
      },
      isSegwit: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        input: {
          address: '',
          value: '',
          index: '',
          tx: '',
          hash: '',
          key: ''
        },
        error: null
      }
    },
    methods: {
      addInput () {
        if (this.validate()) {
          if (this.action === 'Add') {
            this.input.id = this.getId()
            this.$emit('add_inputs', 'inputs', this.input)
          } else {
            this.$emit('update_inputs', 'inputs', this.input)
          }
        }
      },
      validate () {
        const isAddressSegwit = this.input.address.substring(0, 3) === 'bc1'
        if ((isAddressSegwit && !this.isSegwit) || (!isAddressSegwit && this.isSegwit)) {
          this.error = `You address is BTC ${isAddressSegwit? 'Segwit': 'Legacy'}, but the form is for BTC ${this.isSegwit? 'Segwit': 'Legacy'}`
          return false
        }
        for (let key in this.input) {
          if (!this.input[key] && key !== 'id') {
            this.error = 'All fields are required'
            return false
          }
        }
        this.input.index = parseInt(this.input.index)
        this.input.value = parseFloat(this.input.value)
        this.error = null
        return true
      },
      getId () {
        return `f${ (+new Date).toString(16) }`
      }
    },
    mounted () {
      if (this.isSegwit) {
        delete this.input.tx;
      }
      this.$root.$on('edit_inputs', data => {
        this.input = data
      })
    },
    beforeDestroy () {
      this.$root.$off('edit_inputs')
    }
  }
</script>
