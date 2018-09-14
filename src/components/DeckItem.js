import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import DeckStackCounter from './DeckStackCounter'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  wrapper: {
    cursor: 'pointer'
  }
})

export default withStyles(styles)(
  ({ title, fresh, mastered, needPractice, classes, onSelect }) => (
    <div onClick={onSelect} className={classes.wrapper}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {title}
        </Typography>
        <DeckStackCounter count={fresh.length} label="new" />
        <DeckStackCounter count={mastered.length} label="mastered" />
        <DeckStackCounter count={needPractice.length} label="need practice" />
      </Paper>
    </div>
  )
)
