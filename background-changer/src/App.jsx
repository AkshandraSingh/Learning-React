import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [color, SetColor] = useState("white");
  console.log(color);
  return (
    <>
      <div style={{ backgroundColor: color }}>
        <Nav color={color} setColor={SetColor}></Nav>
        <h1 id="heading">React.JS Project | Background Changer</h1>
        <p id="credit">Made By Akshandra Singh</p>
      </div>
    </>
  );
}

export default App;
