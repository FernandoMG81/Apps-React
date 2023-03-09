import { Link } from '../Link.jsx'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Hola! Me llamo Fernando y estoy creando un clon de React Router</p>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1629135732487991304/dZrU01Jx_400x400.jpg' alt='Foto de Fernando' />
      </div>
      <Link to='/'>Ir a la home</Link>
    </>
  )
}
