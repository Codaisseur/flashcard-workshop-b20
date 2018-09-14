import seeds from '../lib/seeds.json'

const initialState = seeds.decks.map(deck => ({
  ...deck,
  mastered: [],
  needPractice: []
}))

export default (state = initialState, { type, payload } = {}) => {
  return state
}
