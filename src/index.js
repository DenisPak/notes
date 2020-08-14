import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
    h5: {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
