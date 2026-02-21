import axios from 'axios'

// Reads from .env file — falls back to localhost in development
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api'

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// ─── API CALLS ────────────────────────────────────────────────

export const getProjects = async () => {
  const response = await api.get('/projects')
  return response.data
}

export const getSkills = async () => {
  const response = await api.get('/skills')
  return response.data
}

export const sendContactMessage = async (formData) => {
  const response = await api.post('/contact', formData)
  return response.data
}

export default api