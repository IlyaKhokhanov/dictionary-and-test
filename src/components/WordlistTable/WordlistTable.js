import React, { useState } from "react";
import "./WordlistTable.scss";
<<<<<<< HEAD
import { WordlistTableRow } from "../WordlistTableRow";
import { IconButton } from "../buttons/IconButton";

export function WordlistTable() {
  const [wordsVisible, setWordsVisible] = useState(false);
  const [translateVisible, setTranslateVisible] = useState(false);
=======
import WordlistTableRow from "../WordlistTableRow/WordlistTableRow";

function WordlistTable() {
  const [wordEye, setWordEye] = useState(false);
  const [translateEye, setTranslateEye] = useState(false);
>>>>>>> 84552f0a5f087fe6eea15911cc12cc3a02ef97e4

  return (
    <table className='table'>
      <tbody>
        <tr className='table-row'>
          <th className='table-cell'>№</th>
          <th className='table-cell'>
            Word
<<<<<<< HEAD
            <IconButton
              handler={() => setWordsVisible((prevValue) => !prevValue)}
              image={`../../img/${
                wordsVisible ? "invisibleEye.svg" : "visibleEye.svg"
              }`}
              descriptionImg={wordsVisible ? "show words" : "hide words"}
              disabledBtn={translateVisible}
            />
=======
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
>>>>>>> 84552f0a5f087fe6eea15911cc12cc3a02ef97e4
          </th>
          <th className='table-cell'>Transcription</th>
          <th className='table-cell'>
            Translate
<<<<<<< HEAD
            <IconButton
              handler={() => setTranslateVisible((prevValue) => !prevValue)}
              image={`../../img/${
                translateVisible ? "invisibleEye.svg" : "visibleEye.svg"
              }`}
              descriptionImg={
                translateVisible ? "show translate" : "hide translate"
              }
              disabledBtn={wordsVisible}
            />
          </th>
        </tr>
        <WordlistTableRow
          wordsVisible={wordsVisible}
          translateVisible={translateVisible}
        />
=======
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
>>>>>>> 84552f0a5f087fe6eea15911cc12cc3a02ef97e4
      </tbody>
    </table>
  );
}
<<<<<<< HEAD
=======

export default WordlistTable;
>>>>>>> 84552f0a5f087fe6eea15911cc12cc3a02ef97e4
