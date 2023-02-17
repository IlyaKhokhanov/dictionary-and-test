import React, { useContext } from "react";
import Button from "../buttons/Button";
import "./Form.scss";
import db from "../../data/data.json";
import CheckboxModule from "../CheckboxModule/CheckboxModule";
import { CheckboxContext } from "../../state/CheckboxContext";

export default function Form() {
  const { state, dispatch } = useContext(CheckboxContext);
  const data = Object.entries(db);

  return (
    <form className='form' onSubmit={(e) => e.preventDefault()}>
      {data.map(([key, value]) => (
        <div key={key} data-schoolbook={key}>
          <label className='form-schoolbook'>
            <input
              className='form-school-checkbox'
              type='checkbox'
              id={key}
              checked={state.find((item) => item.schoolbook === key)}
              onChange={(e) => dispatch(e)}
            />{" "}
            {key}
          </label>
          {state.find((item) => item.schoolbook === key) && (
            <CheckboxModule modules={value} />
          )}
        </div>
      ))}
      {state.length > 0 && (
        <div className='form-btn--wrapper'>
          <Button classForBtn='form-btn' to='/wordlist'>
            Wordlist
          </Button>
          <Button classForBtn='form-btn' to='/test'>
            Test
          </Button>
        </div>
      )}
    </form>
  );
}
