import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export function Button(props) {
  const { buttonClass, to, children } = props;

  return (
    <Link className={`btn ${buttonClass}`} to={to ?? "/"}>
      {children}
    </Link>
  );
}
