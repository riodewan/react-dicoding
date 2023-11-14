import React from "react";
import { showFormattedDate } from "../utils";

function NotesItem({
  id,
  title,
  createdAt,
  body,
  archived,
  onDeleteHandler,
  onMoveNote,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div>
        <hr />
        <div className="note-item__action">
          <button
            className="note-item__archive-button"
            onClick={() => onMoveNote(id)}
          >
            {archived ? "Activate" : "Archive"}
          </button>
          <button
            className="note-item__delete-button"
            onClick={() => onDeleteHandler(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesItem;
