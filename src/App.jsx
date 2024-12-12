// App.jsx
import React, { useState } from 'react';
import Header from './components/Header.jsx';
import NoteCreator from './components/NoteCreator.jsx';
import NoteList from './components/NoteList.jsx';
import ArchiveList from './components/ArchiveList.jsx';
import { getInitialData } from './utils';
import './styles/style.css';

function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreate = (note) => {
    setNotes([...notes, note]);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleArchive = (id) => {
    setNotes(
      notes.map((note) => 
        note.id === id ? { ...note, archived: true } : note
      )
    );
  };

  const handleUnarchive = (id) => {
    setNotes(
      notes.map((note) => 
        note.id === id ? { ...note, archived: false } : note
      )
    );
  };

  const filteredNotes = notes.filter((note) => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="note-app">
      <Header onSearch={setSearchTerm} />
      <div className="note-app__body">
        <NoteCreator onCreate={handleCreate} />
        <h2>Catatan Aktif</h2>
        <NoteList 
          notes={filteredNotes.filter((note) => !note.archived)} 
          onDelete={handleDelete} 
          onArchive={handleArchive} 
        />
        <h2>Arsip</h2>
        <ArchiveList 
          notes={filteredNotes.filter((note) => note.archived)} 
          onDelete={handleDelete} 
          onUnarchive={handleUnarchive} 
        />
      </div>
    </div>
  );
}

export default App;