import React, { useEffect, useState } from "react";
import NotesItem from "./NotesItem";

function NotesList({
  notes,
  activeTab,
  onChangeTab,
  onSearch,
  onDeleteHandler,
  onMoveNote,
}) {
  return (
    <div className="notes-container">
      <div className="notes-tab">
        <div
          className={`notes-tab__item ${
            activeTab === "active"
              ? "notes-tab__item-active"
              : "notes-tab__item-inactive"
          }`}
          onClick={() => onChangeTab("active")}
        >
          <div>Active</div>
        </div>
        <div
          className={`notes-tab__item ${
            activeTab === "archive"
              ? "notes-tab__item-active"
              : "notes-tab__item-inactive"
          }`}
          onClick={() => onChangeTab("archive")}
        >
          <div>Archive</div>
        </div>
      </div>
      <input
        id="search"
        type="text"
        placeholder="Search your notes..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="notes-list__container">
        {notes?.filter((note) =>
          activeTab === "active" ? !note.archived : note.archived
        )?.length > 0 ? (
          <div className="notes-list">
            {notes
              .filter((note) =>
                activeTab === "active" ? !note.archived : note.archived
              )
              .map((note) => (
                <NotesItem
                  key={note.id}
                  {...note}
                  onDeleteHandler={onDeleteHandler}
                  onMoveNote={onMoveNote}
                />
              ))}
          </div>
        ) : (
          <div className="notes-list__empty-message">
            {activeTab === "archive"
              ? "No archived notes yet"
              : "No active notes yet"}
          </div>
        )}
      </div>
    </div>
  );
}

export default NotesList;
