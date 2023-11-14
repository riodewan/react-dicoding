import React from "react";
import NotesList from "./NotesList";
import { getInitialData } from "../utils";
import NotesInput from "./NotesInput";
import { toast } from "react-toastify";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultNotes: getInitialData(),
      notes: getInitialData(),
      activeTab: "active",
      search: "",
    };

    this.onChangeTab = this.onChangeTab.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onMoveNote = this.onMoveNote.bind(this);
    this.onAddNewNote = this.onAddNewNote.bind(this);
  }

  onChangeTab(tab) {
    this.setState({ activeTab: tab });
  }

  onSearch(search) {
    this.setState((prevState) => {
      return {
        search,
        notes: prevState.defaultNotes.filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        ),
      };
    });
  }

  onMoveNote(id) {
    this.setState((prevState) => {
      return {
        defaultNotes: prevState.defaultNotes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: !note.archived };
          }
          return note;
        }),
        notes: prevState.notes.map((note) => {
          if (note.id === id) {
            return { ...note, archived: !note.archived };
          }
          return note;
        }),
      };
    });
    toast.success(
      `You've successfully ${
        this.state.activeTab === "active" ? "archived" : "activate"
      } the note!`
    );
  }

  onDeleteHandler(id) {
    const result = window.confirm("Are you sure you want to delete this note?");
    if (result) {
      this.setState((prevState) => {
        return {
          defaultNotes: prevState.defaultNotes.filter((note) => note.id !== id),
          notes: prevState.notes.filter((note) => note.id !== id),
        };
      });
      toast.success("You've successfully deleted the note!");
    }
  }

  onAddNewNote(note) {
    this.setState((prevState) => {
      return {
        defaultNotes: [note, ...prevState.defaultNotes],
        notes: [note, ...prevState.notes],
      };
    });
    toast.success("You've successfully add new note!");
  }

  render() {
    return (
      <div className="note-app">
        <div className="note-app__header">
          <h1 className="">Notes</h1>
        </div>
        <div className="note-app__body">
          <NotesInput onAddNewNote={this.onAddNewNote} />
          <NotesList
            notes={this.state.notes}
            activeTab={this.state.activeTab}
            onChangeTab={this.onChangeTab}
            onSearch={this.onSearch}
            onDeleteHandler={this.onDeleteHandler}
            onMoveNote={this.onMoveNote}
          />
        </div>
      </div>
    );
  }
}

export default NotesApp;
