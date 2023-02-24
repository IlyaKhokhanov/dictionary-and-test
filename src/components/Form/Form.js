import React, { lazy, Suspense, useContext, useMemo } from "react";
import { Button } from "../Button";
import "./Form.scss";
import { selectedModulesContext } from "../../state/selectedModulesContext";
import { renderCheckboxSchoolbooks } from "../../utils/formUtils";
import { Loader } from "../Loader";
const CheckboxModule = lazy(() => import("../CheckboxModule/CheckboxModule"));

export function Form() {
  const { checkedModules, setCheckedModules } = useContext(
    selectedModulesContext
  );

  const totalSchoolbooks = 2;
  const memoizedRenderSchoolbooks = useMemo(
    () => renderCheckboxSchoolbooks(totalSchoolbooks),
    [totalSchoolbooks]
  );

  function schoolbookCheckboxHandler(e) {
    setCheckedModules({
      ...{ [e.target.id]: [] },
    });
  }

  return (
    <div className='form'>
      {memoizedRenderSchoolbooks.map((schoolbook) => (
        <div key={schoolbook}>
          <label className='form-schoolbook'>
            <input
              className='form-school-checkbox'
              type='radio'
              name='schoolbook'
              id={schoolbook}
              defaultChecked={checkedModules[schoolbook]}
              onClick={schoolbookCheckboxHandler}
            />{" "}
            {schoolbook}
          </label>
          {checkedModules[schoolbook] && (
            <Suspense fallback={<Loader />}>
              <CheckboxModule schoolbook={schoolbook} />
            </Suspense>
          )}
        </div>
      ))}
      {!!Object.keys(checkedModules).length && (
        <div className='form-btn--wrapper'>
          <Button buttonClass='form-btn' to='/wordlist'>
            Wordlist
          </Button>
          <Button buttonClass='form-btn' to='/test'>
            Test
          </Button>
        </div>
      )}
    </div>
  );
}
