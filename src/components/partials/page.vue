<template lang="pug">
  .page
    .page__logo
      router-link.logo(to="/")
    .page__back(v-if="showBackBtn")
      .back(@click="goHome")
        .back__icon
          svg(width='9' height='16' viewbox='0 0 9 16' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M8 1L1 8L8 15' stroke='#073F6A')
        .back__text Back
    .page__head
      h1 {{ title }}
    .page__body
      slot
</template>

<script>
  export default {
    name: 'page',
    props: {
      title: String
    },
    data () {
      return {
        showBackBtn: false
      }
    },
    methods: {
      goHome () {
        this.$router.go(-1)
        // todo clear store
      }
    },
    mounted () {
      this.showBackBtn = this.$route.name !== 'home'
    }
  }
</script>

<style lang="scss" scoped>
  .page {
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 126px 0 64px;
    
    &__back {
      position: absolute;
      top: 86px;
      left: 0;
    }
    
    &__head {
      margin-bottom: 32px;
      text-align: left;
    }
    
    &__body {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
  
  .back {
    display: flex;
    align-items: center;
    padding: 5px 5px 5px 0;
    font-size: 16px;
    cursor: pointer;
    
    &__icon {
      width: 9px;
      height: 16px;
      margin-right: 9px;
      font-size: 0;
      
      svg {
        width: 100%;
      }
    }
    
    &__text {
      font-size: 12px;
      line-height: 14px;
      color: $color-blue;
      text-transform: uppercase;
    }
    
    &:hover {
      opacity: 0.5;
    }
  }
  
  .logo {
    position: absolute;
    left: 0;
    top: 24px;
    width: 60px;
    height: 18px;
    background: url('../../assets/logo.svg') no-repeat center/contain;
  }
</style>
