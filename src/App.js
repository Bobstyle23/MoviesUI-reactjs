import Movies from "./components/movies";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
