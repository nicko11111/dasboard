<script setup>
import { useUserStore } from '@/stores/User'
import { computed, ref } from 'vue'
import Tag from '@/components/baseComponents/Tag.vue'
import { useDateFormat, useNow } from '@vueuse/core'
import BaseTable from '@/components/baseComponents/BaseTable.vue'
import BaseButton from '@/components/baseComponents/BaseButton.vue'
import { useGetUsers } from '@/composables/UseGetUsers'
import BaseInputSearch from '@/components/baseComponents/BaseInputSearch.vue'
const user = useUserStore()

const { employees, isLoading, nextPage, prevPage } = useGetUsers(`https://reqres.in/api/users`)

const localStorageData = localStorage.getItem('userData')
const userData = JSON.parse(localStorageData)

const userName = computed(() => {
  return user.form.name || userData.name
})
const getUserTime = computed(() => {
  return useDateFormat(useNow(), 'DD/MM/YYYY HH:mm:ss')
})

const onPageChange = function () {
  nextPage()
}

const onPagePrev = function () {
  prevPage()
}
</script>
<template>
  <div class="w-full h-full">
    <div class="flex justify-end p-2 items-center">
      <Tag variant="dark">
        <template #tagText>
          <span>{{ userName }}</span> | <span> {{ getUserTime }}</span>
        </template>
      </Tag>
    </div>

    <div v-if="!isLoading" class="flex flex-col p-8 mt-16 w-full justify-center">
      <div class="flex justify-between mb-6">
        <BaseInputSearch />

        <BaseButton
          class="flex items-center justify-center hover:bg-primary-800 font-medium rounded-lg text-sm px-4 py-2 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
          variant="primary"
        >
          <template #text> add employee </template>
        </BaseButton>
      </div>
      <BaseTable
        :headers="['Name', 'Email', 'Gender', 'Location', '']"
        @pageChange="onPageChange"
        @prevPage="onPagePrev"
      >
        <template #tableBody>
          <tr v-for="employee in employees" :key="employee" class="border-b border-gray-100">
            <td
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              {{ employee.name.first }} {{ employee.name.last }}
            </td>
            <td class="px-6 text-white py-4">
              {{ employee.email }}
            </td>
            <td class="px-6 text-white py-4">
              {{ employee.gender }}
            </td>
            <td class="px-6 text-white py-4">
              {{ employee.location.city }}
            </td>

            <td class="px-6 text-indigo-600 py-4">Edit</td>
          </tr>
        </template>
      </BaseTable>
    </div>

    <div v-else-if="isLoading" class="flex justify-center h-full items-center">
      <span class="text-white"> Loading... </span>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
