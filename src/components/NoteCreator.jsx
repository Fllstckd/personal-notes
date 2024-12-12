// NoteCreator.jsx
import React, { useState } from 'react';

function NoteCreator({ onCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = () => {
    if (title && content) {
      onCreate({ 
        id: +new Date(),
        title, 
        body: content, 
        archived: false, 
        createdAt: new Date().toISOString() 
      });
      setTitle('');
      setContent('');
    }
  };

  return (
    <div className="note-input">
      <input 
        type="text" 
        placeholder="Ini adalah judul ..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className="note-input__title"
      />
      <p className="note-input__title__char-limit">Sisa karakter: {50 - title.length}</p>
      <textarea 
        placeholder="Tuliskan catatanmu di sini ..." 
        value={content} 
        onChange={(e) => setContent(e.target.value)}
        className="note-input__body"
      />
      <button onClick={handleCreate}>Buat</button>
    </div>
  );
}

export default NoteCreator;