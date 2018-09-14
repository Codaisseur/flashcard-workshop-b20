import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
  },
})

export default withStyles(styles)(({ count, label, classes }) => (
  (count === 0) ? null : <span className={classes.root}>
    <Typography component="p">
      {`${count} ${label}`}
    </Typography>
  </span>
))
