import { EVENTS } from './const'

export function navigate (href) {
  window.history.pushState({}, '', href)
  // Crear un eventoi personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    const isMainEvent = event.button === 0 // primary click
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to) // Navegacion son SPA
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
