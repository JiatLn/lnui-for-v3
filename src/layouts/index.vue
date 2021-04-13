<template>
  <p>Switch</p>
  <ln-switch v-model:checked="checked"></ln-switch>
  <p>Avatar</p>
  <ln-avatar></ln-avatar>
  <p>Button</p>
  <ln-button>正常</ln-button>
  <ln-button round>圆角</ln-button>
  <ln-button type="success">成功</ln-button>
  <ln-button type="warning">警告</ln-button>
  <ln-button type="error">错误</ln-button>
  <ln-button disabled>不可点击</ln-button>
  <ln-button block>块状按钮</ln-button>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';

const checked = ref(true);
</script>

<style></style>
