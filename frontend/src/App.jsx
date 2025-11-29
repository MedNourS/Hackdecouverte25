import { useState } from "react";
import "./App.css";
import Nav from  "./components/nav.jsx";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header />
    <Nav />
    </>
  );
}

export default App;
