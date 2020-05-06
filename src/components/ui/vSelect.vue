<template lang="pug">
  .v-select
    .v-select__head(@click="toggle"
      :class="{'is-open': isShow}")
      .v-select__head-text {{ value }}
      .v-select__head-icon
        svg(width='14' height='8' viewbox='0 0 14 8' xmlns='http://www.w3.org/2000/svg')
          path(d='M1.64108 0L6.98331 4.94467L12.3255 0L13.9666 1.52227L6.98331 8L0 1.52227L1.64108 0Z')
    .v-select__body(v-if="list.length")
      .v-select__list(v-if="isShow")
        .v-select__item(v-for="(item, i) in list"
          :key="i"
          :class="{'is-active': item === value}"
          @click="select(item)") {{ item }}
</template>

<script>
  export default {
    name: 'v-select',
    props: {
      list: {
        type: Array,
        default: () => {return []}
      },
      value: [String, Number]
    },
    data() {
      return {
        isShow: false
      }
    },
    computed: {},
    methods: {
      toggle () {
        this.isShow = !this.isShow
      },
      close () {
        this.isShow = false
      },
      select (item) {
        this.$emit('input', item)
        this.close()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-select {
    position: relative;
    min-width: 212px;
    
    &__head {
      position: relative;
      width: 100%;
      padding: 0 15px;
      line-height: 42px;
      border-radius: $base-border-radius;
      background-color: $color-white;
      color: $color-black;
      border: 1px solid $color-border;
      cursor: pointer;
      transition: border-color 0.2s ease;
      
      &-icon {
        content: '';
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%);
        width: 14px;
        height: 8px;
        transition: transform 0.2s ease;
        
        svg {
          width: 100%;
          fill: rgba(black, 0.25);
          transition: fill 0.2s ease;
        }
      }
      
      &:hover,
      &.is-open {
        border-color: $color-blue;
        
        svg {
          fill: $color-blue;
        }
      }
      
      &.is-open {
        .v-select__head-icon {
          transform: translateY(-52%) rotate(180deg);
        }
      }
    }
    
    &__body {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
    }
    
    &__list {
      padding-bottom: 20px;
      background-color: $color-white;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 2px 6px rgba(0, 0, 0, 0.04), 0 10px 20px rgba(0, 0, 0, 0.04), inset -2px 0 6px rgba(153, 153, 153, 0.15);
      border-radius: $base-border-radius;
    }
    
    &__item {
      padding: 4px 16px;
      font-size: 14px;
      line-height: 24px;
      cursor: pointer;
      
      &:hover {
        background-color: $color-grey-bg;
      }
      
      &.is-active {
        background-color: $color-grey-bg;
      }
    }
  }
</style>
