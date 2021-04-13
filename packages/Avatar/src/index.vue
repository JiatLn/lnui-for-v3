<template>
  <div class="ln-avatar" :class="{ 'ln-avatar-square': shape === 'square' }" :style="styleObj">
    <div class="ln-avatar__inner">
      <slot> LnUI </slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from '@vue/runtime-core';

export default defineComponent({
  name: 'ln-avatar',
  props: {
    size: {
      type: Number,
      required: false,
      default: 50,
    },
    color: {
      type: String,
      required: false,
      default: '#bc261b',
    },
    textColor: {
      type: String,
      required: false,
      default: 'white',
    },
    shape: {
      type: String,
      required: false,
      default: 'circle',
      validator: (value) => {
        // 这个值必须匹配下列字符串中的一个
        return ['square', 'circle'].includes(value);
      },
    },
  },
  setup(props) {
    const styleObj = reactive({
      '--size': props.size + 'px',
      backgroundColor: props.color,
      '--text-color': props.textColor,
    });
    return {
      styleObj,
      shape: props.shape,
    };
  },
});
</script>

<style lang="scss">
.ln-avatar {
  cursor: pointer;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.2),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.05);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  .ln-avatar__inner {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}

// 方形
.ln-avatar-square {
  border-radius: 4px;
}
</style>
