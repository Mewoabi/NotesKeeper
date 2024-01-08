import React from 'react'
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Card, IconButton, Typography } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';
import { makeStyles } from '@material-ui/core';
import { blue, green, pink, yellow } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    avatar:{
        backgroundColor: (note) => {
            if(note.category === 'work') {
                return green[500]
            }
            if(note.category === 'money') {
                return yellow[700]
            }
            if(note.category === 'reminders') {
                return pink[500]
            }
            return blue[500]
        }
    }
})

const CardNote = ({ note, handleDelete }) => {

    const classes = useStyles(note)

    return (
        <div>
            <Card sx={{ maxWidth: 345, mb:2 }}>
                <CardHeader
                    avatar={
                      <Avatar className={classes.avatar}>
                         {note.category[0].toUpperCase()}
                      </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutline/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardNote