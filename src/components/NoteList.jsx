// NoteList.jsx
import React from 'react';
import NoteCard from './NoteCard';

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteCard 
            key={note.id} 
            title={note.title} 
            createdAt={note.createdAt} 
            body={note.body} 
            onDelete={() => onDelete(note.id)} 
            onAction={() => onArchive(note.id)} 
            isArchived={false}
          />
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </div>
  );
}

export default NoteList;