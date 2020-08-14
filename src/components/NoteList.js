import React, { useState, useEffect } from "react";

import Note from "./Note";
import "./NoteList.css";
import firebase from "../firebase";
function useNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("notes")
      .onSnapshot((snapshot) => {
        const newNotes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotes(newNotes);
      });
    return () => unsubscribe();
  }, []);
  return notes;
}

const NoteList = (props) => {
  const notes = useNotes();

  const noteComps = notes.map((note) => {
    return <Note key={note.id} note={note} onClick={props.onClick} />;
  });
  return <div className="noteList">{noteComps}</div>;
};

export default NoteList;
