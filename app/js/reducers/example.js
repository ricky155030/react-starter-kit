'use strict'

const initialState = {
  text: 'Example Text from redux'
}

export const example = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_EXAMPLE':
      return Object.assign({}, state, {text: action.text})
    default:
      return state
  }
}
