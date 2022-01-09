import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
// import notes from "./notes";
import CreateArea from "./components/CreateArea";


const App = () => {

  const [notes, setNotes] = useState([]);

  function addNote(note) {
    //console.log(note);
    setNotes(prevNotes => {
      return [...prevNotes, note];
    })
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>

      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
      
    </div>
  );
}

export default App;