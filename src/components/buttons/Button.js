import React from "react";
import "./Button.scss";

export default function Button(props) {
  const { classes, children } = props;

  return <button className={`btn ${classes}`}>{children}</button>;
}
