import { useState } from 'react'
import './App.css'

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Esta es una pagina de ejemplo</p>
      <a href='/about'>Ir a sobre nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Hola! Me llamo Fernando y estoy creando un clon de React Router</p>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1629135732487991304/dZrU01Jx_400x400.jpg' alt='Foto de Fernando' />
      </div>
      <a href='/'>Ir a la home</a>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}
    </main>
  )
}

export default App
