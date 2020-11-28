import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: '70%',
      backgroundColor: 'rgba(0, 42, 119, 0.75)',
      marginTop: '5px',
      marginBottom: '15px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      backgroundColor: 'rgba(0, 42, 119, 0.75)',
      marginTop: '5px',
      marginBottom: '15px'
    }
  }
}))

const TextInput = (props) => {
  const classes = useStyles()

  return (
    <TextField
      className={classes.root}
      InputProps={{ style: {color: '#fff'}}}
      InputLabelProps={{ style: {color: '#fff'}}}
      label={props.label}
      color='primary'
      variant="outlined"
    />
  )
}

export default TextInput