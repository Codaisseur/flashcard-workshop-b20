import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import DeckItem from './DeckItem'
import { selectDeck } from '../actions/activeDeck'

const styles = () => ({
  root: {
    flexGrow: 1,
  },
})

const DecksContainer = withStyles(styles)(
  class extends PureComponent {
    // this.selectDeck(index) can be invoked
    // because it is wrapped in a function now:
    //   this.selectDeck(index)() will dispatch
    //   this.props.selectDeck(index)
    selectDeck = deckIndex => () => {
      this.props.selectDeck(deckIndex)
    }

    render() {
      const { classes, decks } = this.props

      return (
        <div className={classes.root}>
          <Grid container spacing={24} justify="space-around">
            <Grid item xs={12}>
              <h2>Pick a Deck</h2>
            </Grid>

            {decks.map((deck, index) => (
              <Grid key={deck.title} item xs={12} sm={6} md={4} lg={3}>
                <DeckItem
                  onSelect={this.selectDeck(index)}
                  {...deck}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )
    }
  }
)

const mapStateToProps = ({ decks }) => ({ decks })
// const mapStateToProps = (state) => {
//   return {
//     decks: state.decks
//   }
// }

const mapDispatchToProps = { selectDeck }

export default connect(mapStateToProps, mapDispatchToProps)(DecksContainer)
