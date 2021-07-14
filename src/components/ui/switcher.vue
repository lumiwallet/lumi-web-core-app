<template lang="pug">
.switcher-container
  p(:class="{secondary: !value}") {{ firstLabel }}
  .switcher-input
    input(type="checkbox" class="toggle" v-model="isSegwit" @change="$emit('toggleSwitch', !value)")
  p(:class="{secondary: value}") {{secondLabel}}
</template>

<script>
  export default {
    name: "switcher",
    props: {
      isSegwit: {
        type: Boolean,
        require: true
      },
      firstLabel: {
        type: String,
        require: true
      },
      secondLabel: {
        type: String,
        require: true
      }
    },
  }
</script>

<style scoped lang="scss">
.switcher-container {
  display: flex;
  box-sizing: border-box;

  & > * {
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  .switcher-input {
    width: 31px;
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    width: 31px;

    &:focus{
      outline: 0;
    }

    &.toggle {
      height: 17px;
      width: 31px;
      border-radius: 40px;
      display: inline-block;
      position: relative;
      margin: 0 15px 0 0 ;
      border: 1px solid $color-black;
      transition: all .2s ease;
      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: $color-black;
        transition: all .2s cubic-bezier(.5, .1, .75, 1.35);
      }
      &:checked {
        &:after {
          transform: translatex(14px);
        }
      }
    }
  }

}
</style>