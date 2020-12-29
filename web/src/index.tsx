import React from 'react';
import ReactDOM from 'react-dom';
import "./index.scss";

const App = () => (
  <h1>
    Fullstack Django, React and TypeScript App!{" "}
    {new Date().toLocaleDateString()}
  </h1>
);

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
