<template lang="pug">
  page(title="BCH transaction")
    .tx-page
      .group
        .group__head
          h2 Inputs
        .group__body
          .btn(@click="toggleShowModal('inputs', 'Add')") Add input
          modal(v-model="show.inputs"
            :title="`${actions.inputs} input`"
            :center="false"
            :showCancel="true")
            addInputComponent(@add_inputs="addData"
              @update_inputs="updateData"
              :action="actions.inputs")
          .group-row
            .list(v-if="tx.inputs.length")
              .item(v-for="(item, i) in tx.inputs")
                .item__buttons
                  .item__del(@click="deleteData('inputs', item.id)") Delete
                  .item__edit(@click="editData('inputs', i)") Edit
                .item__row
                  .item__title Address
                  .item__value {{ item.address }}
                .item__row
                  .item__title Value
                  .item__value {{ item.satoshis }}
                .item__row
                  .item__title Output N
                  .item__value {{ item.outputIndex }}
                .item__row
                  .item__title Script
                  .item__value {{ item.script }}
                .item__row
                  .item__title Hash
                  .item__value {{ item.txId }}
                .item__row
                  .item__title Key (WIF)
                  .item__value {{ item.key }}
            .msg.item__value(v-else) No inputs
      .group
        .group__head
          h2 Outputs
        .group__body
          .btn(@click="toggleShowModal('outputs', 'Add')") Add output
          modal(v-model="show.outputs"
            :title="`${actions.outputs} output`"
            :showCancel="true")
            addOutputComponent(@add_outputs="addData"
              @update_outputs="updateData"
              :action="actions.outputs")
          .group-row.group-row--m-margin
            .list(v-if="tx.outputs.length")
              .item(v-for="(item, i) in tx.outputs")
                .item__buttons
                  .item__del(@click="deleteData('outputs', item.id)") Delete
                  .item__edit(@click="editData('outputs', i)") Edit
                .item__row
                  .item__title Address
                  .item__value {{ item.address }}
                .item__row
                  .item__title Value
                  .item__value {{ item.satoshis }}
            .msg.item__value(v-else) No outputs
          .group-row
            error(:show="!!error") {{ error }}
            button(@click="makeTx") Build
    modal(v-model="showModal" title="BTC transaction")
      tx(:hash="rawTx.hash" :tx="rawTx.tx")
    errorModal(title="Transaction failed")
</template>

<script>
  import page               from '@/components/partials/page'
  import addInputComponent  from '@/components/partials/BCH/addBchInput'
  import addOutputComponent from '@/components/partials/BCH/addBchOutput'
  import modal              from '@/components/ui/modal'
  import tx                 from '@/components/partials/tx'
  import error              from '@/components/ui/error'
  import errorModal         from '@/components/ui/errorModal'
  
  export default {
    name: 'tx-btc',
    components: {
      page,
      addInputComponent,
      addOutputComponent,
      modal,
      tx,
      error,
      errorModal
    },
    data () {
      return {
        tx: {
          inputs: [],
          outputs: []
        },
        show: {
          inputs: false,
          outputs: false
        },
        showModal: false,
        actions: {
          inputs: 'Add',
          outputs: 'Add'
        },
        rawTx: {
          hash: null,
          tx: null
        },
        error: ''
      }
    },
    methods: {
      toggleShowModal (type, action = 'Add') {
        this.show[type] = !this.show[type]
        this.actions[type] = action
      },
      addData (type, item) {
        this.tx[type].push(item)
        this.toggleShowModal(type)
      },
      editData (type, index) {
        this.toggleShowModal(type, 'Edit')
        let data = JSON.parse(JSON.stringify(this.tx[type][index]))
        
        setTimeout(() => {
          this.$root.$emit(`edit_${ type }`, data)
        }, 0)
      },
      updateData (type, data) {
        let findIndex = this.tx[type].findIndex(item => item.id === data.id)
        
        this.tx[type][findIndex] = data
        this.toggleShowModal(type)
      },
      deleteData (type, id) {
        this.tx[type] = this.tx[type].filter((item) => id !== item.id)
      },
      validate () {
        return !!this.tx.inputs.length && !!this.tx.outputs.length
      },
      async makeTx () {
        if (this.validate()) {
          this.error = ''
          let txData = await this.$store.dispatch('makeRawBchTx', this.tx)
          console.log(txData)
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
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    line-height: 21px;
    color: $color-blue;
    font-weight: $normal-font-weight;
    cursor: pointer;
    
    &:hover {
      opacity: 0.6;
    }
  }
  
  .msg {
    color: $color-grey-text;
  }
  
  .item {
    position: relative;
    margin-bottom: 20px;
    padding-bottom: 63px;
    border-bottom: 1px solid $color-grey;
    
    &__row {
      display: flex;
    }
    
    &__row + &__row {
      margin-top: 16px;
    }
    
    &__title {
      width: 70px;
      flex-shrink: 0;
      margin-right: 20px;
      color: $color-grey-text;
      line-height: 21px;
      white-space: nowrap;
    }
    
    &__value {
      flex: 1;
      line-height: 21px;
      word-break: break-all;
    }
    
    &:last-child {
      border-bottom: none;
    }
    
    &__buttons {
      position: absolute;
      bottom: 28px;
      right: 0;
      display: flex;
      align-items: baseline;
    }
    
    &__del,
    &__edit {
      transition: opacity 0.2s ease;
      cursor: pointer;
      
      &:hover {
        opacity: 0.6;
      }
    }
    
    &__del {
      margin-right: 32px;
      color: $color-red;
    }
    
    &__edit {
      color: $color-grey-text;
    }
  }
</style>
