import React, { useState } from "react";

import "./App.css";
import NoteList from "./NoteList";
import CreateNote from "./CreateNote";
import Modal from "@material-ui/core/Modal";

import firebase from "../firebase";

function App() {
  const [open, setOpen] = useState(false);
  const [modalNote, setModalNote] = useState({});

  const handleOpen = (note) => {
    setModalNote(note);
    setOpen(true);
  };

  const handleClose = () => {
    firebase.firestore().collection("notes").doc(modalNote.id).update({
      title: modalNote.title,
      text: modalNote.text,
    });
    setOpen(false);
  };

  const handleDelete = () => {
    if (window.confirm("Do you really want to delete this note?")) {
      firebase.firestore().collection("notes").doc(modalNote.id).delete();
      setOpen(false);
    } else {
    }
  };

  return (
    <div className="App">
      <CreateNote />
      <NoteList onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        style={{ display: "grid", alignItems: "center" }}
      >
        <>
          <CreateNote
            note={modalNote}
            setModalNote={setModalNote}
            handleClose={handleClose}
            handleDelete={handleDelete}
          />
        </>
      </Modal>
    </div>
  );
}

export default App;
