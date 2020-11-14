import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  'button': {
    backgroundColor: '#00D141',
    color: '#fff',
    fontSize: '15px',
    fontWeight: 'bold',
    borderRadius: '28px',
    padding: '15px 60px',
    '&:hover': {
      backgroundColor: '#0CAB3D',
    }
  }
})

const SmallButton = (props) => {
  const classes = useStyles()

  return (
    <Button className={classes.button} >
      {props.label}
    </Button>
  )
}

export default SmallButton