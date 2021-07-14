<template lang="pug">
  page(title="About Lumi")
    .about
      .about__top
        .about__block
          .about__intro The LumiCore library is an implementation of tools for working with Bitcoin, Bitcoin Cash, Ethereum, Dogecoin, Litecoin and Binance Coin. It allows to run the private keys derivation tree following the BIP44 standard and sign transactions. LumiCore is available under the MIT license.
        .about__block
          .about__title Our website
          .about__text
            a(href="https://lumiwallet.com" target="_blank") lumiwallet.com
        .about__block
          .about__title Drop us a line
          .about__text
            a(href="mailto:hello@lumiwallet.com") hello@lumiwallet.com
        .about__block
          .about__title Follow us
          .about__text
            .follow-us-list
              a.follow-us-link(v-for="(item, i) in social"
                :key="i"
                :class="item.text ? 'link' : item.name + ' icon'"
                :href="item.link"
                target="_blank") {{ item.text }}
      .about__bottom
        .about__footer © {{ getDate }} Lumi Wallet
</template>

<script>
  import page from '@/components/partials/page'
  
  export default {
    name: 'about',
    components: {
      page
    },
    data () {
      return {
        social: [
          {
            name: 'facebook',
            link: 'https://www.facebook.com/lumiwallet'
          },
          {
            name: 'twitter',
            link: 'https://twitter.com/Lumi_wallet'
          },
          {
            name: 'reddit',
            link: 'https://www.reddit.com/r/LumiWallet/'
          },
          {
            name: 'medium',
            link: 'https://medium.com/lumiwallet'
          },
          {
            name: 'telegram',
            link: 'https://t.me/lumipublic'
          },
          {
            link: 'https://blog.lumiwallet.com/',
            text: 'Blog'
          }
        ]
      }
    },
    computed: {
      getDate () {
        return new Date().getFullYear()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 560px;
    flex: 1;
    
    &__top {
      margin-bottom: 32px;
    }
    
    &__intro {
      line-height: 25px;
      letter-spacing: 0.03em;
    }
    
    &__block {
      margin-bottom: 32px;
    }
    
    &__title {
      margin-bottom: 8px;
      font-size: 14px;
      line-height: 140%;
      color: $color-dark-grey;
    }
    
    &__footer {
      font-size: 12px;
      line-height: 13px;
      color: $color-grey-second;
    }
  }
  
  .follow-us-list {
    display: flex;
    align-items: center;
  }
  
  .follow-us-link {
    margin-right: 20px;
    
    &.link {
      letter-spacing: 0.03em;
    }
  }
  
  .icon {
    position: relative;
    display: block;
    cursor: pointer;
    
    &:hover {
      opacity: 0.7;
    }
    
    &.facebook {
      width: 20px;
      height: 20px;
      background: url('../../assets/facebook.svg') no-repeat center/contain;
    }
    
    &.twitter {
      width: 20px;
      height: 20px;
      background: url('../../assets/twitter.svg') no-repeat center/contain;
    }
    
    &.reddit {
      width: 20px;
      height: 20px;
      background: url('../../assets/reddit.svg') no-repeat center/contain;
    }
    
    &.medium {
      width: 20px;
      height: 20px;
      background: url('../../assets/medium.svg') no-repeat center/contain;
    }
    
    &.telegram {
      width: 20px;
      height: 20px;
      background: url('../../assets/telegram.svg') no-repeat center/contain;
    }
  }
</style>
