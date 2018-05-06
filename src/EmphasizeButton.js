import React from "react"
import "./App.css"

export default function EmphasizeButton(props) {

return (
  <button className="emphasize-button" onClick={() => props.emphText()}>To make it emphatic, click me!</button>
)

}
