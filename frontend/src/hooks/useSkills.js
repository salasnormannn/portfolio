import { useState, useEffect } from 'react'
import { getSkills } from '../services/api'
import { SKILLS } from '../constants'

const useSkills = () => {
  const [skills, setSkills]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills()
        setSkills(data)
      } catch (err) {
        console.warn('API unavailable, using static data:', err.message)
        setSkills(SKILLS) // fallback to constants
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  return { skills, loading, error }
}

export default useSkills