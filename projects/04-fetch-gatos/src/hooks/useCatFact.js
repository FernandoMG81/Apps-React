import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }
  // Recuperar la cita al cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
