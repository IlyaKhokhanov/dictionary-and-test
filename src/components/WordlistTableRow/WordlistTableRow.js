import React, { useContext, useMemo } from "react";
import db from "../../data/data.json";
import { CheckboxContext } from "../../state/CheckboxContext";
import filterData from "../../utils/filterData";
import { correctWord } from "../../utils/other";
import webSpeech from "../../utils/webSpeech";

function WordlistTableRow(props) {
  const { wordEye, translateEye } = props;
  const { state } = useContext(CheckboxContext);

  const data = Object.entries(db);

  const memoData = useMemo(() => filterData(state, data), [state, data]);

  function speak(e) {
    webSpeech(e.target.closest(".table-cell").textContent);
  }

  return (
    <>
      {memoData.map((word, index) => (
        <tr key={word.word} className='table-row'>
          <td className='table-cell'>{index + 1}</td>
          <td className={`table-cell ${wordEye ? "hide" : ""}`}>
            {correctWord(word.word)}
            <button
              className='table-speaker-btn'
              onClick={(e) => {
                speak(e);
              }}>
              <img
                className='table-speaker-img'
                src='../../img/speaker.svg'
                alt='eye'
              />
            </button>
          </td>
          <td className={`table-cell ${wordEye ? "hide" : ""}`}>
            {word.transcription}
          </td>
          <td className={`table-cell ${translateEye ? "hide" : ""}`}>
            {correctWord(word.translation)}
          </td>
        </tr>
      ))}
    </>
  );
}

export default WordlistTableRow;
