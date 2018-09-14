import { combineReducers } from 'redux'
import decks from './decks'
import activeDeck from './activeDeck'

export default combineReducers({
  decks,
  activeDeck,
})
