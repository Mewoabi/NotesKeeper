
import * as React from 'react';
import { useState } from 'react';
import { Typography, Button, Container, TextField, RadioGroup, Radio } from '@material-ui/core';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { useHistory } from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(
  {
    mtop: {
      marginTop: 20
    },
    mbot: {
      marginBottom: 10
    },
    mboth: {
      marginTop: 20,
      marginBottom: 20
    },
    contain: { 
      color: "grey",
      padding:20,
      display:"block",
      width: '100%'
    },
    btn: {
      display: "block",
      marginTop: 20
    }
  }
)

export default function Create() {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('');
  const [titleErr, setTitleErr] = useState(false);
  const [detailsErr, setDetailsErr] = useState(false)
  const [category, setCategory] = useState('money');
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      setTitleErr(true)
      return
    }
    if (details === '') {
      setDetailsErr(true)
      return
    }
    fetch("http://localhost:8000/Notes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ title, details, category })
    }).then(() => {
      history.push('/')
    }).catch(err => console.log(err))
  }

  const classes = useStyles();
  return (
    <div>
      <Container className={classes.contain} >
        <Typography variant='h5' component='h1' className={classes.mbot}>Create a new Note</Typography>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField  
            label="Title"
            required
            variant="outlined"
            fullWidth
            error={titleErr}
            className={classes.mbot}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Details"
            required
            variant="outlined"
            multiline
            minRows={3}
            error={detailsErr}
            fullWidth
            className={classes.mbot}
            onChange={(e) => setDetails(e.target.value)}
          />
          <FormControl className={classes.contain}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel value='money' control={<Radio />} label='Money' />
              <FormControlLabel value='work' control={<Radio />} label='Work' />
              <FormControlLabel value='reminders' control={<Radio />} label='Reminder' />
              <FormControlLabel value='todos' control={<Radio />} label='Todo' />
            </RadioGroup>
          </FormControl>

          <Button
            type='submit'
            variant='contained'
            color='primary'
            endIcon={<KeyboardArrowRightOutlinedIcon />}
            className={classes.mtop}
          >
            Create
          </Button>
        </form>
      </Container>
    </div>
  )
}
