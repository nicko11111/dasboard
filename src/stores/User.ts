import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  let form = ref({ name: '', nickName: '' })
  function fillUser(user) {
    form.value = user.value
  }

  return { form, fillUser }
})
