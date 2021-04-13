<template>
  <span @click="toggle" class="ln-switch" :class="{ 'ln-switch-on': checked }"></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ln-switch',
  props: {
    checked: {
      type: Boolean,
      require: true,
    },
  },
  emits: ['update:checked'],
  setup(props, ctx) {
    const toggle = () => {
      ctx.emit('update:checked', !props.checked);
    };
    return {
      toggle,
    };
  },
});
</script>

<style lang="scss">
$width: 50px;
$height: 24px;
$radius: $height / 2;
$color: #1aad19;
$borderColor: #dfdfdf;

.ln-switch {
  display: inline-block;
  position: relative;
  width: $width + 2px;
  height: $height + 2px;
  border: 1px solid $borderColor;
  outline: 0;
  border-radius: $radius + 1px;
  box-sizing: border-box;
  background-color: $borderColor;
  transition: background-color 0.1s, border 0.1s;
  cursor: pointer;
  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: $width;
    height: $height;
    border-radius: $width / 2;
    background-color: #fff;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: $radius * 2;
    height: $radius * 2;
    border-radius: 100%;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
}

.ln-switch-on {
  border-color: $color;
  background-color: $color;
  &:before {
    border-color: $color;
    background-color: $color;
  }
  &:after {
    transform: translateX($width - $radius * 2);
  }
}
</style>
