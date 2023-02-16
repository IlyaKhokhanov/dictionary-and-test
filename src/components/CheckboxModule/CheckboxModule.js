import React from "react";

export default function CheckboxModule(props) {
  const { modules } = props;
  const listModules = Object.keys(modules);
  return (
    <div className='form-module--wrapper'>
      {listModules.map((key) => (
        <label key={key} className='form-module'>
          <input type='checkbox' /> {key}
        </label>
      ))}
    </div>
  );
}
