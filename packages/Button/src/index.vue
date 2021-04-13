<template>
  <button class="ln-btn" :class="classList" :disabled="disabled">
    <slot>Button</slot>
  </button>
</template>

<script>
import { defineComponent, ref } from '@vue/runtime-core';

export default defineComponent({
  name: 'ln-button',
  props: {
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator: (value) => {
        // 这个值必须匹配下列字符串中的一个
        return ['primary', 'success', 'warning', 'error'].includes(value);
      },
    },
    round: {
      type: Boolean,
      required: false,
      default: false,
    },
    block: {
      type: Boolean,
      required: false,
      default: false,
    },
    ripple: {
      type: Boolean,
      required: false,
      default: true,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    let classList = ref([]);
    classList = [
      `ln-btn--${props.type}`,
      { 'is-round': props.round },
      { 'is-block': props.block },
      { 'is-ripple': props.ripple },
    ];
    return {
      classList,
      disabled: props.disabled,
    };
  },
});
</script>

<style lang="scss">
$primary: #2d8cf0;
$success: #19be6b;
$warning: #ff9900;
$error: #cd0100;

$small: 28px;
$normal: 36px;
$large: 44px;

$font-small: 14px;
$font-normal: 16px;
$font-large: 18px;

.ln-btn {
  display: inline-block;
  border: none;
  cursor: pointer;
  color: white;
  outline: none;
  letter-spacing: 0.5px;
  padding: 12px 20px;
  font-size: 14px;
  line-height: 1;
  min-width: 88px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  &:hover {
    opacity: 0.9;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3), 0px 0px 20px rgba(0, 0, 0, 0.1) inset;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 1;
    background-color: #999;
  }
}

// .ln-btn + .ln-btn:not(:last-child) {
//   margin-left: 10px;
// }

// 圆角
.ln-btn.is-round {
  border-radius: 20px;
}

// 块状按钮
.ln-btn.is-block {
  width: 100%;
  overflow: hidden;
}

// 按钮类型
.ln-btn--primary {
  background-color: $primary;
}
.ln-btn--success {
  background-color: $success;
}
.ln-btn--warning {
  background-color: $warning;
}
.ln-btn--error {
  background-color: $error;
}

// 水波纹
.ln-btn.is-ripple {
  position: relative;
  // 隐藏溢出的径向渐变背景
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    // 设置径向渐变
    background-image: radial-gradient(circle, white 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.3s, opacity 0.5s;
  }

  &:active::after {
    transform: scale(0, 0);
    opacity: 0.3;
    //设置初始状态
    transition: 0s;
  }
}
</style>
