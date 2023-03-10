import { Link } from '../Link.jsx'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    button: 'Ir a la home',
    description: 'Hola, estoy creando un clon de React Router'
  },
  en: {
    title: 'About us',
    button: 'Go to Home Page',
    description: 'Hi, I am creating a clone of React Router'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1629135732487991304/dZrU01Jx_400x400.jpg' alt='Foto de Fernando' />
        <div>{i18n.description}</div>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
