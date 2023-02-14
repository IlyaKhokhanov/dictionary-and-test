import React from "react";
import "./Header.scss"

export default function Header(props) {
  const {title} = props

  return (
    <header className="header">
      <p className="header-title">{title}</p>
      <button className="header-btn">Back</button>
    </header>
  )
}