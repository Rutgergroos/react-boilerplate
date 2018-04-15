import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
  isOpen: false
}

function menuReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.MENU_OPEN:
      return {
        ...state,
        isOpen: action.isOpen
      }
    default:
      return state
  }
}

export default menuReducer
