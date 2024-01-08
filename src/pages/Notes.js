import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import { useStyles } from '../Styles/style'
import CardNote from '../components/CardNote';
import Masonry from 'react-masonry-css';


export default function Notes() {
  const classe = useStyles();
  const [notes, setNotes] = useState(null)

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('http://localhost:8000/Notes');
      const json = await response.json();
      if (response.ok) {
        setNotes(json);
      }
    }

    fetchNotes();
  }, [])

  const handleDelete = (id) => {
    fetch(`http://localhost:8000/Notes/${id}`, {
      method: "DELETE"
    }).then(() => {
      console.log("deleted note")
      setNotes(notes.filter(note => note.id !== id));
    })
      .catch(err => console.log(err))
  }

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }

  return (
    <Container className={classe.contain}>
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {
          notes && notes.map(note => (
            <div key={note.id}>
              <CardNote key={note.id} note={note} handleDelete={handleDelete} />
            </div>
          ))
        }
      </Masonry>
    </Container>

  )
}
