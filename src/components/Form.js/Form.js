import React, { useState } from "react";
import Button from "../buttons/Button";
import "./Form.scss";
import db from "../../data/data.json";
import CheckboxModule from "../CheckboxModule/CheckboxModule";

export default function Form() {
  const data = Object.entries(db);

  const [active, setActive] = useState([]);

  const checkboxHandler = (e) => {
    e.target.checked
      ? setActive([...active, e.target.id])
      : setActive(active.filter((item) => item !== e.target.id));
  };

  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      {data.map(([key, value]) => (
        <div key={key}>
          <label className='form-schoolbook'>
            <input type='checkbox' id={key} onChange={checkboxHandler} /> {key}
          </label>
          {active.includes(key) ? <CheckboxModule modules={value} /> : ""}
        </div>
      ))}
      <div>
        <Button classes='form-btn'>Wordlist</Button>
        <Button classes='form-btn'>Test</Button>
      </div>
    </form>
  );
}
