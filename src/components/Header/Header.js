import React from "react";
import { Button } from "../Button";
import "./Header.scss";

export function Header(props) {
  const { buttonClass, children } = props;

  return (
    <header className='header'>
      <p className='header-title'>{children}</p>
      <Button buttonClass={buttonClass}>Back to select</Button>
    </header>
  );
}
