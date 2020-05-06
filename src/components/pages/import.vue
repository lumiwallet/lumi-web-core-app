<template lang="pug">
  page(title="Import your mnemonic")
    .import
      .import__text
        p Enter words separated with space
      .import__form
        .import__textarea
          textarea(v-model="mnemonic")
        error(:show="!!error") {{ error }}
        .import__button
          button(@click="importMnemonic") Import
    errorModal(title="Import failed")
</template>

<script>
  import page from '@/components/partials/page'
  import error from '@/components/ui/error'
  import errorModal from '@/components/ui/errorModal'

  export default {
    name: 'import',
    components: {
      page,
      error,
      errorModal
    },
    data() {
      return {
        mnemonic: '',
        error: ''
      }
    },
    methods: {
      async importMnemonic () {
        if (!this.validate()) {
          return false
        }
        let obj = {
          type: 'mnemonic',
          data: this.mnemonic
        }
  
        await this.$store.dispatch('createCore', obj)
      },
      validate () {
        if (!this.mnemonic) {
          this.error = 'Mnemonic is empty'
          return false
        }
        
        this.error = ''
        return true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .import {
    &__text {
      margin-bottom: 8px;
    }
    
    &__textarea {
      width: 100%;
      margin-bottom: 24px;
    }
  }
</style>
