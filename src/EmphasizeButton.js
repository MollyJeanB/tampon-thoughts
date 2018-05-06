import React from "react"
import "./App.css"

export default function EmphasizeButton(props) {

return (
  <button id={props.id} className="emphasize-button" onClick={() => props.emphText()}>To make it emphatic, click me!</button>
)

}
