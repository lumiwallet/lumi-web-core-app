<template lang="pug">
  modal(v-model="show"
    class="modal--error"
    :title="title"
    @closeModal="clearError")
    .error-modal
      .error-modal__msg {{ error }}
      .error-modal__btn
        button(@click="close") {{ btnText }}
</template>

<script>
  import modal from '@/components/ui/modal'
  import {mapState} from 'vuex'
  
  export default {
    name: 'error-modal',
    components: {
      modal
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      btnText: {
        type: String,
        default: 'Back to form'
      }
    },
    data() {
      return {
        show: false
      }
    },
    computed: {
      ...mapState({
        error: state => state.errors.error
      })
    },
    watch: {
      error (newVal) {
        if (newVal) {
          this.show = true
        }
      }
    },
    methods: {
      close () {
        this.show = false
        this.clearError()
      },
      clearError () {
        this.$store.commit('errors/DEL_ERROR')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .error-modal {
    &__msg {
      margin-bottom: 24px;
      line-height: 140%;
    }
    
    &__btn {
      width: 200px;
    }
  }
</style>
