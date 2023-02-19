import React, { useState } from "react";
import "./WordlistTable.scss";
import WordlistTableRow from "../WordlistTableRow/WordlistTableRow";

function WordlistTable() {
  const [wordEye, setWordEye] = useState(false);
  const [translateEye, setTranslateEye] = useState(false);

  return (
    <table className='table'>
      <tbody>
        <tr className='table-row'>
          <th className='table-cell'>№</th>
          <th className='table-cell'>
            Word
            <button
              className='table-eye-btn'
              disabled={translateEye}
              onClick={() => setWordEye(!wordEye)}>
              <img
                className='table-eye-img'
                src={`../../img/${
                  wordEye ? "invisibleEye.svg" : "visibleEye.svg"
                }`}
                alt='eye'
              />
            </button>
          </th>
          <th className='table-cell'>Transcription</th>
          <th className='table-cell'>
            Translate
            <button
              className='table-eye-btn'
              disabled={wordEye}
              onClick={() => setTranslateEye(!translateEye)}>
              <img
                className='table-eye-img'
                src={`../../img/${
                  translateEye ? "invisibleEye.svg" : "visibleEye.svg"
                }`}
                alt='eye'
              />
            </button>
          </th>
        </tr>
        <WordlistTableRow wordEye={wordEye} translateEye={translateEye} />
      </tbody>
    </table>
  );
}

export default WordlistTable;
