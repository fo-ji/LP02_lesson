import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  'button': {
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#00D141',
      color: '#fff',
      fontSize: '18px',
      fontWeight: 'bold',
      borderRadius: '30px',
      padding: '20px',
      width: '70%',
      '&:hover': {
        backgroundColor: '#0CAB3D',
      }
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#00D141',
      color: '#fff',
      fontSize: '18px',
      fontWeight: 'bold',
      borderRadius: '40px',
      padding: '20px',
      width: '100%',
      '&:hover': {
        backgroundColor: '#0CAB3D',
      }
    }
  }
}))

const MediumButton = (props) => {
  const classes = useStyles()

  return (
    <Button className={classes.button} >
      {props.label}
    </Button>
  )
}

export default MediumButton