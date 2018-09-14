import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import DeckItem from './DeckItem'

const styles = () => ({
  root: {
    flexGrow: 1,
  },
})

const DecksContainer = withStyles(styles)(
  class extends PureComponent {
    render() {
      return (
        <div className={this.props.classes.root}>
          <Grid container spacing={24} justify="space-around">
            <Grid item xs={12}>
              <h2>Pick a Deck</h2>
            </Grid>

            {this.props.decks.map((deck) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <DeckItem key={deck.title} {...deck} />
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

export default connect(mapStateToProps)(DecksContainer)
