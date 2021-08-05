<template lang="pug">
  page(title="XDC transaction")
    .tx-page
      .group
        .group__head
          h2 Details
        .group__body
          .group-row
            label Nonce
            input(v-model="tx.nonce" type="text" placeholder="0")
          .group-row
            label Value (in WEI)
            input(v-model="tx.value" type="text" placeholder="WEI")
          .group-row
            label To
            input(v-model="tx.to" type="text" placeholder="ETH address")
          .group-row
            label Gas price
            input(v-model="tx.gasPrice" type="text" placeholder="WEI")
          .group-row
            label Gas limit
            input(v-model="tx.gasLimit" type="text" placeholder="21000")
          .group-row
            label Private key
            input(v-model="tx.privateKey" type="text" placeholder="0x")
          .group-row
            label Chain ID
            input(v-model="tx.chainId" type="text" placeholder="0")
          .group-row
            error(:show="!!error") {{ error }}
            button(@click="makeTx") Build
    modal(v-model="showModal" title="XDC transaction")
      tx(:hash="rawTx.hash" :tx="rawTx.tx")
    errorModal(title="Transaction failed")
</template>

<script>
  import page       from '@/components/partials/page'
  import modal      from '@/components/ui/modal'
  import tx         from '@/components/partials/tx'
  import error      from '@/components/ui/error'
  import errorModal from '@/components/ui/errorModal'
  
  export default {
    name: 'xdc',
    components: {
      page,
      modal,
      tx,
      error,
      errorModal
    },
    data () {
      return {
        tx: {
          nonce: '',
          value: '',
          to: '',
          gasPrice: '',
          gasLimit: '',
          privateKey: '',
          chainId: ''
        },
        showModal: false,
        rawTx: {
          hash: null,
          tx: null
        },
        error: ''
      }
    },
    methods: {
      validate () {
        return !!this.tx.nonce &&
          !!this.tx.to && !!this.tx.gasPrice &&
          !!this.tx.gasLimit && !!this.tx.privateKey
      },
      async makeTx () {
        if (this.validate()) {
          this.error = ''
          this.tx.value = parseInt(this.tx.value)
          this.tx.nonce = parseInt(this.tx.nonce)
          this.tx.gasPrice = parseInt(this.tx.gasPrice)
          this.tx.gasLimit = parseInt(this.tx.gasLimit)
          this.tx.chainId = parseInt(this.tx.chainId)
          console.log(this.tx)
          let txData = await this.$store.dispatch('makeRawEthTx', this.tx)
          
          if (txData && txData.hasOwnProperty('hash') && txData.hasOwnProperty('tx')) {
            this.rawTx = txData
            this.showModal = true
          }
        } else {
          this.error = 'All fields are required'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    display: inline-block;
    color: #548ad5;
    cursor: pointer;
    
    &:hover {
      opacity: 0.6;
    }
  }
  
  .msg {
    opacity: 0.6;
  }
  
  .item {
    position: relative;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid rgba(black, 0.2);
    
    &:last-child {
      border-bottom: none;
    }
    
    &__del {
      position: absolute;
      top: 50%;
      transform: translateY(calc(50% - 30px));
      right: 0;
      color: #eb5757;
      cursor: pointer;
      
      &:hover {
        opacity: 0.6;
      }
    }
  }
</style>
