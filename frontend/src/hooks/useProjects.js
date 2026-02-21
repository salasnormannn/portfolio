import { useState, useEffect } from 'react'
import { getProjects } from '../services/api'
import { PROJECTS } from '../constants'

const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        setProjects(data)
      } catch (err) {
        console.warn('API unavailable, using static data:', err.message)
        setProjects(PROJECTS) // fallback to constants
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return { projects, loading, error }
}

export default useProjects