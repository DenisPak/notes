import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";

import "./Note.css";

const useStyles = makeStyles({
  card: {
    position: "relative",
    height: "100%",
  },
  actionArea: {
    height: "100%",
    justifySelf: "start",
  },
});

const Note = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={() => props.onClick(props.note)}>
      <CardActionArea className={classes.actionArea}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            style={{ wordWrap: "break-word" }}
          >
            {props.note.title}
          </Typography>
          <pre>
            <Typography
              className={classes.paragraph}
              variant="body2"
              component="p"
            >
              {props.note.text}
            </Typography>
          </pre>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Note;
