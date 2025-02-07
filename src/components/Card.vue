<script setup lang="ts">
import BaseButton from '@/components/baseComponents/BaseButton.vue'
</script>

<template>
  <div class="flex h-screen w-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <slot name="header">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-indigo-600">
          Sign in to your account
        </h2>
      </slot>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <slot name="content" />
      <div>
        <slot name="footer">
          <BaseButton
            type="submit"
            class="flex w-full cursor-pointer justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            text="Sign in"
            @click="onClick"
          />
        </slot>
      </div>
    </div>
  </div>
</template>
