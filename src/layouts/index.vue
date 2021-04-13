<template>
  <p>layout</p>
  <ln-switch v-model:checked="checked"></ln-switch>
  <ln-switch v-model:checked="checked"></ln-switch>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';

const checked = ref(true);
</script>

<style></style>
