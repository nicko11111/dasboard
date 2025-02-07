<script setup>
const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  textRight: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
})
function onInput(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="flex justify-between">
    <label class="block text-sm/6 font-medium text-indigo-600">{{ label }}</label>
    <label class="block text-sm/6 font-medium text-indigo-600">{{ textRight }}</label>
  </div>

  <input :value="modelValue" v-bind="$attrs" :placeholder="label" @input="onInput" />
  {{ errorMessage }}
</template>
