import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState()

  // Recuperar la imagen cada vez que tenenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageURL(url)
      })
  }, [fact])

  return { imageURL }
}
