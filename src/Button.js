import React from "react"
import './App.css';

export default function Button(props) {

  return (
    <button className="poem-button" onClick={() => props.onClick()}>Click me!</button>
  )
}
