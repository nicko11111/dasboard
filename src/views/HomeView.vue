<script setup lang="ts">
import Card from '@/components/Card.vue'
import BaseInput from '@/components/baseComponents/BaseInput.vue'
import BaseButton from '@/components/baseComponents/BaseButton.vue'
import { ref } from 'vue'

import type { Ref } from 'vue'
import { useRouter } from 'vue-router'
import { computed } from 'vue'

import { useUserStore } from '@/stores/User'
import type { user } from '@/types/User'

const user = useUserStore()
const router = useRouter()

const form: Ref<user> = ref({
  name: '',
  nickName: '',
})

const disabled = computed<boolean>(() => {
  return !form.value.name
})
function onSubmit() {
  user.fillUser(form)
  localStorage.setItem('userData', JSON.stringify({ ...form.value, isLogged: 'true' }))
  router.push({ name: 'about' })
}
</script>
<template>
  <Card>
    <template #content>
      <form @submit.prevent="onSubmit">
        <div class="mt-2">
          <BaseInput
            v-model="form.name"
            type="text"
            label="Name"
            name="name"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base indigo-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>

        <div class="mb-4 mt-4">
          <BaseInput
            v-model="form.nickName"
            type="text"
            label="NickName"
            textRight="Forgot password?"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base indigo-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </form>
    </template>
    <template #footer>
      <BaseButton
        class="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        text="Sign in"
        @click="onSubmit"
        :disabled="disabled"
      >
        <slot name="text"> Sign in </slot>
      </BaseButton>
      <p class="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start now</a>
      </p>
    </template>
  </Card>
</template>
