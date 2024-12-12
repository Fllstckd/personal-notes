// Header.jsx
import React from 'react';

function Header({ onSearch }) {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <input 
        type="text" 
        placeholder="Cari catatan ..." 
        onChange={(e) => onSearch(e.target.value)} 
      />
    </header>
  );
}

export default Header;
