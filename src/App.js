import React, { useState,useEffect } from 'react'
import NoteList from './components/NoteList'
import {nanoid} from 'nanoid'
import Search from './components/Search';
import Header from './components/Header';

function App (){
  const [notes, setNotes] = useState([

    {
      id: nanoid(),
      text: "This is my first note",
      date:"23/03/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date:"23/03/2022"
    },
   { id: nanoid(),
    text: "This is my third note",
    date:"23/03/2022"
  },
  ]);

  const [searchNote, setSearchNote] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  // localda turishi 
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes'));
    if(savedNotes){
      setNotes(savedNotes)
    }
  },[]);

  // localga saxranit qilish
  useEffect(() => {
   localStorage.setItem('react-notes', JSON.stringify(notes))
  },[notes])


  // new Note 
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  // deleting note with id
  const deletingNote = (id) => {
    const newNotes =  notes.filter((note) => note.id !==id);
    setNotes(newNotes)
  }
  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'> 
      <Header handleToggleDarkMode ={setDarkMode} />

      <Search  handleSearch={setSearchNote} />
      <NoteList notes={notes.filter((note) => note.text.toLowerCase().includes(searchNote) )} handleAddNote={addNote} handleDelete={deletingNote} />

      </div>

    </div>
  )


}

export default  App;
