import axios from 'axios'

const BASE_URL = 'https://site.ualegion.com'

export const loginUser = (data) => axios.post(`${BASE_URL}/api/v1/security/login`, data)

// Аккаунт
// fed.lviv@gmail.com - 11111