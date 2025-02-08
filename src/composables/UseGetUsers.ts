import { GetUsers } from '@/database/models/GetUsers'
import { computed, ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import type { employees } from '@/types/Employees'
export function useGetUsers(url: string) {
  console.log(url)
  const isLoading: Ref<boolean> = ref(false)
  const employees: Ref<employees[]> = ref([])
  const errors = ref([])
  const page: Ref<number> = ref(1)
  const results: Ref<number> = ref(10)

  const params = computed(() => {
    return {
      page: page.value,
      results: results.value,
      // first:'Slavina'
    }
  })

  watchEffect(async () => {
    isLoading.value = false
    errors.value = null
    try {
      isLoading.value = true
      const { data } = await GetUsers('https://randomuser.me/api/', { params: { ...params.value } })
      employees.value = data.results
    } catch (error) {
      console.log(error.message)
      errors.value = error.message
    } finally {
      isLoading.value = false
    }
  })

  const nextPage = () => {
    page.value++
  }
  const prevPage = () => {
    page.value--
  }

  return {
    isLoading,
    employees,
    errors,
    nextPage,
    prevPage,
  }
}
