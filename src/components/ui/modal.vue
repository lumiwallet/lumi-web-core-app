<template lang="pug">
  transition(name="fade-up")
    .modal(v-if="value" :class="{'modal--center': center}")
      .modal__bg(@click="close")
      .modal__inner
        .modal__wr
          .modal__close(@click="close")
            .modal__close-text(v-if="showCancel") CANCEL
            .modal__close-icon
              svg(viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg")
                path(d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z")
          .modal__title(v-if="title.length") {{ title }}
          .modal__content
            slot
</template>

<script>
  export default {
    name: 'modal',
    props: {
      value: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ''
      },
      center: {
        type: Boolean,
        default: true
      },
      showCancel: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close () {
        this.$emit('closeModal')
        this.$emit('input', false)
      }
    }
  }
</script>



<style lang="scss" scoped>
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2000;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &__bg {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4);
    }
    
    &__inner {
      position: static;
      height: 100%;
      width: 100%;
      padding: 100px 0 50px;
      overflow-y: auto;
    }
    
    &__wr {
      position: relative;
      z-index: 2;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      width: 100%;
      max-width: 624px;
      margin: 0 auto;
      background: #ffffff;
      overflow: hidden;
      padding: 32px 32px 40px;
      border-radius: 8px;
      border: 1px solid $color-grey;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 10px 20px rgba(0, 0, 0, 0.04), inset -2px 0px 6px rgba(153, 153, 153, 0.15);
    }
    
    &__header {
      position: relative;
    }
    
    &__title {
      margin-bottom: 24px;
      font-size: 22px;
      line-height: 26px;
      font-weight: $bold-font-weight;
    }
    
    &__close {
      position: absolute;
      top: 39px;
      right: 32px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: opacity 0.2s ease;
      
      &-text {
        margin-right: 8px;
        color: $color-blue;
        font-size: 12px;
        line-height: 14px;
      }
      
      &-icon {
        width: 12px;
        height: 12px;
      }
      
      svg {
        fill: $color-blue;
      }
      
      &:hover {
        opacity: 0.5;
      }
    }
    
    &__content {
      overflow-x: hidden;
    }
    
    &--center {
      .modal__inner {
        display: flex;
        align-items: center;
        padding: 50px 0;
      }
    }
    
    &--error {
      .modal__wr {
        max-width: 485px;
      }
    }
  }

  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: opacity .2s ease;
  
    .modal__wr {
      transition: transform .2s ease;
    }
  }

  .fade-up-enter,
  .fade-up-leave-to {
    opacity: 0;
    
    .modal__wr {
      transform: translateY(15px);
    }
  }
</style>
