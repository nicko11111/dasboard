import axios from 'axios'
import type { employees } from '@/types/Employees'
export async function GetUsers(url: string, params) {
  const response = await axios.get<employees>(url, { ...params })

  return response
}
