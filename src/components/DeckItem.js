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
})

export default withStyles(styles)(
  ({ title, fresh, mastered, needPractice, classes }) => (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {title}
        </Typography>
        <Typography component="p">
          <DeckStackCounter count={fresh.length} label="new" />
          <DeckStackCounter count={mastered.length} label="mastered" />
          <DeckStackCounter count={needPractice.length} label="need practice" />
        </Typography>
      </Paper>
    </div>
  )
)
