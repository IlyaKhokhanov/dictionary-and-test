import React from "react";
import Button from "../buttons/Button";
import "./Header.scss";

export default function Header(props) {
  const { title } = props;

  return (
    <header className='header'>
      <p className='header-title'>{title}</p>
      <Button classes='header-btn'>Back to select</Button>
    </header>
  );
}
