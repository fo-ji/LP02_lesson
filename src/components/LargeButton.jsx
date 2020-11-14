import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  'button': {
    backgroundColor: '#00D141',
    color: '#fff',
    fontSize: '1.1em',
    fontWeight: 'bold',
    borderRadius: '40px',
    padding: '27px 50px',
    marginTop: '50px',
    '&:hover': {
      backgroundColor: '#0CAB3D',
    }
  }
})

const LargeButton = (props) => {
  const classes = useStyles()

  return (
    <Button className={classes.button} >
      {props.label}
    </Button>
  )
}

export default LargeButton