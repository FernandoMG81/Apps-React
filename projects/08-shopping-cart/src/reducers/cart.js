export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const updateLocaleStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  ADD_TO_CART: (state, action) => {
    const { id } = action.payload
    const productInCarIndex = state.findIndex(item => item.id === id)

    if (productInCarIndex >= 0) {
      const newState = structuredClone(state)
      newState[productInCarIndex].quantity += 1
      updateLocaleStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]

    updateLocaleStorage(newState)
    return newState
  },

  REMOVE_FROM_CART: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id === id)
    updateLocaleStorage(newState)
    return newState
  },

  CLEAR_CART: (state, action) => {
    updateLocaleStorage([])
    return []
  }
}

export const cartReducer = (state, action) => {
  const { type: actionType } = action

  const updateState = UPDATE_STATE_BY_ACTION[actionType]

  return updateState ? updateState(state, action) : state
}
