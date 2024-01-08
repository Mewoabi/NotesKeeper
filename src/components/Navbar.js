import React from 'react'
import '../Styles/navbar.css'
 

export const Navbar = () => { 
    return (
        <nav>
            <h2 style={{color: "white"}}>
                NotesApp
            </h2>
            <div>
                 <a href="/">Notes</a>
                 <a href="/create">Create</a>
            </div>
        </nav>
    )
}
