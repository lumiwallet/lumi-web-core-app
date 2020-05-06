<template lang="pug">
  page(title="Create a random mnemonic")
    .create
      .create__text
        p Select mnemonic words count
      .create__form
        .create__select
          vSelect(:list="list" v-model="count")
        .create__button
          button(@click="createNewMnemonic") Create
</template>

<script>
  import page from '@/components/partials/page'
  import vSelect from '@/components/ui/vSelect'

  export default {
    name: 'create',
    components: {
      page,
      vSelect
    },
    data() {
      return {
        list: [12, 15, 18, 21, 24],
        count: 12
      }
    },
    methods: {
      async createNewMnemonic () {
        let obj = {
          type: 'new',
          data: this.count
        }
        
        await this.$store.dispatch('createCore', obj)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .create {
    &__text {
      margin-bottom: 8px;
    }
    
    &__form {
      display: flex;
      flex-wrap: wrap;
    }
    
    &__select {
      width: 212px;
      margin-right: 16px;
    }
  }
</style>
