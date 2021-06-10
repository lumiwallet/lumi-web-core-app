<template lang="pug">
  page(title="BNB transaction")
    .tx-page
      .group
        .group__head
          h2 Params
        .group__body
          .group-row
            label Address from
            input(v-model="tx.params.address" type="text" placeholder="Enter binance coin address")
          .group-row
            label Account number
            input(v-model="tx.params.account_number" type="text" placeholder="Enter account number")
          .group-row
            label Balance
            input(v-model="tx.params.balance" type="text" placeholder="0")
          .group-row
            label Private key (WIF)
            input(v-model="tx.params.privateKey" type="text" placeholder="Enter private key")
          .group-row
            label Public key
            input(v-model="tx.params.publicKey" type="text" placeholder="Enter public key")
          .group-row
            label Sequence
            input(v-model="tx.params.sequence" type="text" placeholder="0")
          .group-row
            label Address to
            input(v-model="tx.txParams.addressTo" type="text" placeholder="Enter binance coin address")
          .group-row
            label Amount
            input(v-model="tx.txParams.amount" type="text" placeholder="0")
          .group-row
            label Fee
            input(v-model="tx.txParams.fee" type="text" placeholder="0")
          .group-row
            label Memo
            input(v-model="tx.txParams.memo" type="text" placeholder="Enter memo")
          .group__row
            error(:show="!!error") {{ error }}
            button(@click="makeTx") Build
    modal(v-model="showModal" title="BNB transaction")
      tx(:hash="rawTx.hash" :tx="rawTx.tx")
    errorModal(title="Transaction failed")
</template>

<script>
  import page               from '@/components/partials/page'
  import modal              from '@/components/ui/modal'
  import tx                 from '@/components/partials/tx'
  import error              from '@/components/ui/error'
  import errorModal         from '@/components/ui/errorModal'
  import {BinanceTx}          from 'lumi-web-core'
  
  export default {
    name: 'tx-bnb',
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
          params: {
            account_number: null,
            address: '',
            balance: null,
            privateKey: '',
            publicKey: '',
            sequence: null
          },
          txParams: {
            addressTo: '',
            amount: null,
            fee: null,
            memo: ''
          }
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
        let isValid = true
        Object.keys(this.tx.params).map(item=>{
          if (this.tx.params[item]==='' || !this.tx.params[item] ) {
            isValid=false
          }
        })
        Object.keys(this.tx.txParams).map(item=>{
          if (this.tx.txParams[item]==='' || !this.tx.txParams[item]) {
            isValid=false
          }
        })
        return isValid
      },
      async makeTx () {
        if (this.validate()) {
          this.tx.params.account_number = parseInt(this.tx.params.account_number)
          this.tx.params.balance = parseFloat(this.tx.params.balance)
          this.tx.params.sequence = parseInt(this.tx.params.sequence)
          this.tx.txParams.amount = parseFloat(this.tx.txParams.amount)
          this.tx.txParams.fee = parseFloat(this.tx.txParams.fee)
          this.error = ''
          let tx = new BinanceTx(this.tx.params)
          const rawTx = tx.make(this.tx.txParams).serialize()
          const hash = tx.getHash()
          
          if (rawTx && hash) {
            this.rawTx.tx = rawTx
            this.rawTx.hash = hash
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
  }
</style>
