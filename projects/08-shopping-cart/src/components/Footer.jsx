import './Footer.css'
import { useFilters } from '../hooks/useFilters.js'

export function Footer () {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {
        /*
        <h4>Prueba tecnica de React ⚛️</h4>
        <h5>Shopping cart con useContext & useReducer</h5>
      */
      }
    </footer>
  )
}
