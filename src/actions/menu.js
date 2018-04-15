import * as ActionTypes from '../constants/ActionTypes'

export const openMenu = (isOpen) => {
  return {
    type: ActionTypes.MENU_OPEN,
    isOpen
  }
}
