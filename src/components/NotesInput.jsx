import React, { useState } from "react";
import { toast } from "react-toastify";

function NotesInput({ onAddNewNote }) {
  const [noteData, setNoteData] = useState({
    title: "",
    body: "",
  });

  const onTitleChange = (event) => {
    if (event.target.value.length <= 50) {
      setNoteData({
        ...noteData,
        title: event.target.value,
      });
    }
  };

  const onDescriptionChange = (event) => {
    setNoteData({
      ...noteData,
      body: event.target.value,
    });
  };

  const onSubmit = () => {
    if (noteData.title.length === 0) {
      toast.error("Title cannot be empty!");
      return;
    }
    if (noteData.body.length === 0) {
      toast.error("Note content cannot be empty!");
      return;
    }

    const note = {
      ...noteData,
      id: +new Date(),
      createdAt: new Date().toISOString(),
      archived: false,
    };
    onAddNewNote(note);
    setNoteData({
      title: "",
      body: "",
    });
  };

  return (
    <div className="note-input">
      <h3 className="note-input__title">Create Your Note</h3>

      <div className="note-input__body">
        <input
          id="title"
          type="text"
          placeholder="Enter title"
          value={noteData.title}
          onChange={(e) => onTitleChange(e)}
        />
        <p className="note-input__title__char-limit">
          Remaining characters: {50 - noteData.title.length}
        </p>
        <textarea
          id="description"
          placeholder="Enter your note here..."
          rows={10}
          value={noteData.body}
          onChange={(e) => onDescriptionChange(e)}
        />
        <button onClick={() => onSubmit()}>Add new note</button>
      </div>
    </div>
  );
}

export default NotesInput;
