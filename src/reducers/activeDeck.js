import { SELECT_DECK, UNSELECT_DECK } from '../actions/activeDeck'

export default (state = null, { type, payload } = {}) => {
  switch(type) {
    case SELECT_DECK :
      return payload

    case UNSELECT_DECK :
      return null

    default :
      return state
  }
}
