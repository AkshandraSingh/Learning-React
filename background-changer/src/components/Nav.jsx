import React from "react";
import "./Nav.css";

function Nav({ color, setColor }) {
  console.log(`Color : ${color}`);
  return (
    <>
      <nav>
        <ul>
          <li>
            <button
              id="blue"
              onClick={() => {
                setColor("blue");
              }}
            >
              Blue
            </button>
          </li>
          <li>
            <button
              id="red"
              onClick={() => {
                setColor("red");
              }}
            >
              Red
            </button>
          </li>
          <li>
            <button
              id="green"
              onClick={() => {
                setColor("green");
              }}
            >
              Green
            </button>
          </li>
          <li>
            <button
              id="purple"
              onClick={() => {
                setColor("purple");
              }}
            >
              Purple
            </button>
          </li>
          <li>
            <button
              id="orange"
              onClick={() => {
                setColor("orange");
              }}
            >
              Orange
            </button>
          </li>
          <li>
            <button
              id="yellow"
              onClick={() => {
                setColor("yellow");
              }}
            >
              Yellow
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
