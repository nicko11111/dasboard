<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => {
      return ['default', 'midnight', 'dark'].includes(value)
    },
  },
})

const tagStyle = computed(() => {
  return props.variant
})
</script>

<template>
  <div class="p-2 rounded-xl border border-1" :class="tagStyle">
    <slot name="tagText">tag</slot>
  </div>
</template>

<style>
.midnight {
  background: indigo;
}
.default {
  background: none;
}
.dark {
  border-color: indigo;
  color: rgb(250, 240, 240);
}
</style>
