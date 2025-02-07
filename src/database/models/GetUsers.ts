import axios from 'axios'

export async function GetUsers(url: string, params) {
  const response = await axios.get(url, { ...params })

  return response
}
