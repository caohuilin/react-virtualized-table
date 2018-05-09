import React from "react";
import { render } from "react-dom";
import Table from "./Table";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Table />
  </div>
);

render(<App />, document.getElementById("root"));
