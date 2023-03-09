import image404 from './images/this-is-fine-404.gif'
import { Link } from './Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>This is NOT fine</h1>
        <img src={image404} alt='Page 404 not found' />
      </div>
      <Link to='/'>Volver a la home</Link>
    </>
  )
}
