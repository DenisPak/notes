import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import "./CreateNote.css";
import firebase from "../firebase";

const useStyles = makeStyles({
  createCard: {
    maxWidth: 600,
    width: "100%",
    margin: "auto",
    position: "relative",
    overflow: "visible",
  },
  modalCard: {
    minHeight: "5em",
    maxHeight: "50vh",
    height: "100%",
  },
  fab: {
    margin: 0,
    top: "auto",
    right: 15,
    bottom: -25,
    left: "auto",
    position: "absolute",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const CreateNote = (props) => {
  const [title, setTitle] = useState(props.note ? props.note.title : "");
  const [text, setText] = useState(props.note ? props.note.text : "");
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    addToFirestore();
  };

  const addToFirestore = () => {
    firebase
      .firestore()
      .collection("notes")
      .add({ title, text })
      .then(() => {
        setTitle("");
        setText("");
      });
  };

  useEffect(() => {
    if (props.note) {
      props.setModalNote({
        id: props.note.id,
        title,
        text,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, text]);

  return (
    <Card className={classes.createCard}>
      <CardContent className="crateNote">
        <form action="#" onSubmit={handleSubmit}>
          <TextField
            placeholder="Title"
            value={title}
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: 20,
                fontWeight: 700,
              },
            }}
          />
          <TextField
            multiline
            fullWidth
            placeholder="Take a note"
            className={props.handleDelete ? classes.modalCard : null}
            rowsMax={8}
            rows={props.handleDelete ? 8 : null}
            value={text}
            onChange={(e) => setText(e.target.value)}
            InputProps={{
              disableUnderline: true,
              style: {
                fontSize: 18,
              },
            }}
          />
        </form>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {props.handleDelete ? (
          <>
            <Button
              variant="contained"
              disableElevation
              onClick={props.handleDelete}
            >
              <DeleteIcon />
            </Button>
            <Button
              variant="contained"
              disableElevation
              onClick={props.handleClose}
            >
              edit
            </Button>
          </>
        ) : (
          <Fab
            size="medium"
            className={classes.fab}
            color="primary"
            aria-label="add"
          >
            <AddIcon onClick={addToFirestore} />
          </Fab>
        )}
      </CardActions>
    </Card>
  );
};

export default CreateNote;
