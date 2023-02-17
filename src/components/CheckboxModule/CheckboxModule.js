import React, { useContext } from "react";
import { CheckboxContext } from "../../state/CheckboxContext";

export default function CheckboxModule(props) {
  const { modules } = props;
  const { dispatch } = useContext(CheckboxContext);
  const listModules = Object.keys(modules);

  return (
    <div className='form-module--wrapper'>
      {listModules.map((key) => (
        <label key={key} className='form-module'>
          <input
            className='form-module-checkbox'
            type='checkbox'
            id={key}
            onChange={(e) => dispatch(e)}
          />{" "}
          {key}
        </label>
      ))}
    </div>
  );
}
