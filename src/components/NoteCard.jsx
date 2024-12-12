// NoteCard.jsx
import React from 'react';
import { showFormattedDate } from '../utils';

function NoteCard({ title, createdAt, body, onDelete, onAction, isArchived }) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={onDelete}>Delete</button>
        <button className="note-item__archive-button" onClick={onAction}>{isArchived ? 'Pindahkan' : 'Arsipkan'}</button>
      </div>
    </div>
  );
}

export default NoteCard;