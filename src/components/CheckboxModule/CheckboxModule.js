import React, { useCallback, useEffect, useMemo } from "react";
import produce from "immer";
import { SelectedModulesContext } from "../../state/SelectedModulesContext";
import { useRequiredContext } from "../../hooks/useRequiredContext";
import { downloadModules } from "../../utils/formUtils";

export default function CheckboxModule(props) {
  const { schoolbook } = props;
  const {
    checkedModules,
    setCheckedModules,
    downloadedSelectedSchoolbook,
    setDownloadedSelectedSchoolbook,
  } = useRequiredContext(SelectedModulesContext);

  useEffect(() => {
    downloadModules(schoolbook, setDownloadedSelectedSchoolbook);
  }, []);

  const memoizedListModules = useMemo(
    () => Object.keys(downloadedSelectedSchoolbook),
    [downloadedSelectedSchoolbook]
  );

  const modulesCheckboxHandler = useCallback(
    (e) => {
      setCheckedModules((prevModules) =>
        produce(prevModules, (draft) => {
          !prevModules.get(schoolbook).includes(e.target.id)
            ? draft.set(schoolbook, [
                ...prevModules.get(schoolbook),
                e.target.id,
              ])
            : draft.set(
                schoolbook,
                prevModules
                  .get(schoolbook)
                  .filter((module) => module !== e.target.id)
              );
        })
      );
    },
    [checkedModules]
  );

  return (
    <div className='form-module--wrapper'>
      {memoizedListModules.map((module) => (
        <label key={module} className='form-module'>
          <input
            className='form-module-checkbox'
            type='checkbox'
            id={module}
            defaultChecked={checkedModules.get(schoolbook).includes(module)}
            onClick={modulesCheckboxHandler}
          />{" "}
          {module}
        </label>
      ))}
    </div>
  );
}
