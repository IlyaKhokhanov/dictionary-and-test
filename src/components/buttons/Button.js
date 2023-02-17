import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export default function Button(props) {
  const { classForBtn, to, children } = props;

  return (
    <Link className={`btn ${classForBtn}`} to={to || "/"}>
      {children}
    </Link>
  );
}
