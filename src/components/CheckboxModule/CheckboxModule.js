import React, { useContext, useEffect, useMemo } from "react";
import produce from "immer";
import { selectedModulesContext } from "../../state/selectedModulesContext";
import { downloadModules } from "../../utils/formUtils";

export default function CheckboxModule(props) {
  const { schoolbook } = props;
  const {
    checkedModules,
    setCheckedModules,
    downloadedSelectedSchoolbook,
    setDownloadedSelectedSchoolbook,
  } = useContext(selectedModulesContext);

  useEffect(() => {
    downloadModules(schoolbook, setDownloadedSelectedSchoolbook);
  }, []);

  const memoizedListModules = useMemo(
    () => Object.keys(downloadedSelectedSchoolbook),
    [downloadedSelectedSchoolbook]
  );

  function modulesCheckboxHandler(e) {
    if (!checkedModules[schoolbook].includes(e.target.id)) {
      setCheckedModules(
        produce((draft) => {
          draft[schoolbook].push(e.target.id);
        })
      );
    } else if (checkedModules[schoolbook].includes(e.target.id)) {
      setCheckedModules(
        produce((draft) => {
          draft[schoolbook] = draft[schoolbook].filter(
            (module) => module !== e.target.id
          );
        })
      );
    }
  }

  return (
    <div className='form-module--wrapper'>
      {memoizedListModules.map((module) => (
        <label key={module} className='form-module'>
          <input
            className='form-module-checkbox'
            type='checkbox'
            id={module}
            defaultChecked={checkedModules[schoolbook].includes(module)}
            onClick={modulesCheckboxHandler}
          />{" "}
          {module}
        </label>
      ))}
    </div>
  );
}
