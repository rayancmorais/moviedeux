import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
