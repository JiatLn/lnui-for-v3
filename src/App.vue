<template>
  <ln-switch v-model:checked="checked"></ln-switch>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      checked: true,
    };
  },
});
</script>

<style></style>
