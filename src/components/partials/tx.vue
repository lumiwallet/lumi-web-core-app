<template lang="pug">
  .tx
    .tx__row
      .tx__title hash:
      .tx__data {{ hash }}
      .tx__copy(ref="hash")
    .tx__row
      .tx__title raw tx:
      .tx__data {{ tx }}
      .tx__copy(ref="tx")
</template>

<script>
  import Clipboard from 'clipboard'
  
  export default {
    name: 'tx',
    props: {
      hash: {
        type: String,
        default: ''
      },
      tx: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        clipboard: null
      }
    },
    computed: {},
    methods: {
      initClipboard (name) {
        this.clipboard = new Clipboard(this.$refs[name], {
          text: () => {
            return this[name]
          }
        })
      }
    },
    mounted () {
      this.initClipboard('hash')
      this.initClipboard('tx')
    },
    destroyed () {
      this.clipboard.destroy()
    }
  }
</script>

<style lang="scss" scoped>
  .tx {
    &__title {
      margin-bottom: 8px;
      color: $color-grey-text;
    }
    
    &__row {
      position: relative;
    }
    
    &__row + &__row {
      margin-top: 16px;
    }
    
    &__data {
      word-break: break-all;
    }
    
    &__copy {
      position: absolute;
      top: 0;
      right: 0;
      width: 13px;
      height: 16px;
      background: url('../../assets/copy.svg') no-repeat center/contain;
      cursor: pointer;
      
      &:hover {
        opacity: 0.7;
      }
  
      &:active {
        opacity: 0.5;
      }
    }
  }
</style>
