import React from "react";
import Button from "../buttons/Button";
import "./Header.scss";

export default function Header(props) {
  const { classForBtn, children } = props;

  return (
    <header className='header'>
      <p className='header-title'>{children}</p>
      <Button classForBtn={classForBtn}>Back to select</Button>
    </header>
  );
}
