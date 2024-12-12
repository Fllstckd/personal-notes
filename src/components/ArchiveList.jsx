// ArchiveList.jsx
import React from 'react';
import NoteCard from './NoteCard';

function ArchiveList({ notes, onDelete, onUnarchive }) {
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
            onAction={() => onUnarchive(note.id)} 
            isArchived={true}
          />
        ))
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan di arsip</p>
      )}
    </div>
  );
}

export default ArchiveList;