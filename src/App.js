import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import notes from "./notes";


const App = () => {
  return (
    <div>
      <Header />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
      
    </div>
  );
}

export default App;