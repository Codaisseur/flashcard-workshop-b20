export const SELECT_DECK = 'SELECT_DECK'
export const UNSELECT_DECK = 'UNSELECT_DECK'

export const selectDeck = (deckIndex) => ({
  type: SELECT_DECK,
  payload: deckIndex
})

export const unselectDeck = () => ({
  type: UNSELECT_DECK
})
