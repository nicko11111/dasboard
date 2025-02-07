<script setup>
const emit = defineEmits(['click'])
defineProps({
  text: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

function onClick() {
  emit('click')
}
</script>

<template>
  <button
    v-bind="$attrs"
    :class="{
      'cursor-not-allowed bg-indigo-400 hover:bg-indigo-500': disabled,
      'cursor-pointer bg-indigo-600 hover:bg-indigo-500': !disabled,
    }"
    @click="onClick"
    :disabled="disabled"
  >
    <slot name="text"> click </slot>
  </button>
</template>
