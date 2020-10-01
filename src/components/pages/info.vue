<template lang="pug">
  page(title="Wallet info")
    .info
      .group
        .group__head
          h2 Common info
        .group__body
          .info-row
            .info-row__title Mnemonic
            .info-row__value {{ core.mnemonic }}
          .info-row
            .info-row__title Seed hex representation
            .info-row__value {{ core.seedInHex }}
          .info-row
            .info-row__title BIP32 Root Key
            .info-row__value {{ core.xprv }}
      .group
        .group__head
          h2 BIP32 path
        .group__body
          .group-row
            .info-row.info-row--big
              .info-row__title Derivation path
              .info-row__value
                .form
                  .form__path
                    input(v-model="path" type="text")
                  .form__range
                    input(v-model="from" type="text")
                  .form__range
                    input(v-model="to" type="text")
                  .form__button
                    button(@click="generate") Generate
          .group-row(v-if="info")
            .info-row
              .info-row__title BIP32 Extended Private Key
              .info-row__value {{ info.node.privateExtendedKey }}
            .info-row
              .info-row__title BIP32 Extended Public Key
              .info-row__value {{ info.node.publicExtendedKey }}
      .group(v-if="info")
        .group__head
          h2 Result
        .group__body
          .list
            .list-item(v-for="(item, i) in info.list")
              .info-row
                .info-row__title Sequence:
                .info-row__value {{ savedFrom + i }}
              .info-row
                .info-row__title Path
                .info-row__value {{ item.path }}
              .info-row
                .info-row__title Address BTC
                .info-row__value {{ item.btcAddress }}
              .info-row
                .info-row__title Address BCH
                .info-row__value {{ item.bchAddress }}
              .info-row
                .info-row__title Address ETH
                .info-row__value {{ item.ethAddress }}
              .info-row
                .info-row__title Private key
                .info-row__value {{ item.privateKey }}
              .info-row
                .info-row__title Public key
                .info-row__value {{ item.publicKey }}
    errorModal(title="Derivation failed")
</template>

<script>
  import page       from '@/components/partials/page'
  import errorModal from '@/components/ui/errorModal'
  import {mapState} from 'vuex'
  
  export default {
    name: 'info',
    components: {
      page,
      errorModal
    },
    computed: {
      ...mapState({
        core: state => state.CORE
      })
    },
    data () {
      return {
        path: 'm/44\'/0\'/0\'/0',
        from: 0,
        to: 20,
        info: null,
        savedFrom: 0
      }
    },
    methods: {
      async generate () {
        let data = {
          path: this.path,
          from: this.from,
          to: this.to
        }
        
        this.info = await this.$store.dispatch('getChildNodes', data)
        this.savedFrom = +this.from
      }
    }
  }
</script>



<style lang="scss" scoped>
  .info-row {
    display: flex;
    max-width: 720px;
    margin-bottom: 16px;
    
    &:last-child {
      margin-bottom: 0;
    }
    
    &__title {
      width: 120px;
      margin-right: 20px;
      flex-shrink: 0;
      font-size: 14px;
      line-height: 21px;
      color: $color-grey-text;
    }
    
    &__value {
      flex: 1;
      word-break: break-all;
      line-height: 21px;
      letter-spacing: 0.03em;
    }
    
    &--big {
      max-width: 850px;
      align-items: center;
    }
  }
  
  .form {
    display: flex;
    flex-wrap: wrap;
    margin: -5px;
    
    &__path {
      flex: 1 0 120px;
      margin: 5px;
    }
    
    &__range {
      flex: 1 0 50px;
      margin: 5px;
    }
    
    &__button {
      flex: 1 0 130px;
      margin: 5px;
      
      button {
        width: 100%;
      }
    }
  }
  
  .list-item {
    position: relative;
    max-width: 830px;
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid $color-border;
    
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
</style>
