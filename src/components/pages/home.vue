<template lang="pug">
  page(title="Lumi Core")
    .links
      .links__head
        h3 Mnemonic phrase
      .links__body
        .links__item
          router-link(to="create").link Create a new mnemonic
        .links__item
          router-link(to="import").link Import your mnemonic
    .links
      .links__head
        h3 Create transaction manually
      .links__body
        .links__item
          router-link(to="tx-btc").link BTC transaction
        .links__item
          router-link(to="tx-eth").link ETH transaction
        .links__item
          router-link(to="tx-bch").link BCH transaction
        .links__item
          router-link(to="tx-doge").link DOGE transaction
        .links__item
          router-link(to="tx-bnb").link BNB transaction
        .links__item
          router-link(to="tx-ltc").link LTC transaction
        .links__item
          router-link(to="tx-btcv").link BTCV transaction
        .links__item
          router-link(to="tx-xdc").link XDC transaction
    .links
      .links__head
        h3 More
      .links__body
        .links__item
          router-link(to="about").link About Lumi
</template>

<script>
  import page from '@/components/partials/page'
  
  export default {
    name: 'home',
    components: {
      page
    },
    data () {
      return {}
    },
    computed: {},
    methods: {
      open(path) {
        this.$router.push(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .links {
    margin-bottom: 32px;
    
    &__head {
      margin-bottom: 16px;
    }
    
    &__item {
      margin-bottom: 16px;
    }
  }
</style>
