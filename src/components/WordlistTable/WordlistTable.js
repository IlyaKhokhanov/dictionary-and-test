import React, { useCallback, useState } from "react";
import { WordlistTableRow } from "../WordlistTableRow";
import { IconButton } from "../buttons/IconButton";
import "./WordlistTable.scss";

export function WordlistTable() {
  const [wordsVisible, setWordsVisible] = useState(false);
  const [translateVisible, setTranslateVisible] = useState(false);

  const handlerWordsVisible = useCallback(
    () => setWordsVisible((prevValue) => !prevValue),
    [wordsVisible]
  );

  const handlerTranslateVisible = useCallback(
    () => setTranslateVisible((prevValue) => !prevValue),
    [translateVisible]
  );

  return (
    <table className='table'>
      <tbody>
        <tr className='table-row'>
          <th className='table-cell'>№</th>
          <th className='table-cell'>
            Word
            <IconButton
              handler={handlerWordsVisible}
              image={`../../img/${
                wordsVisible ? "invisibleEye.svg" : "visibleEye.svg"
              }`}
              descriptionImg={wordsVisible ? "show words" : "hide words"}
              disabledBtn={translateVisible}
            />
          </th>
          <th className='table-cell'>Transcription</th>
          <th className='table-cell'>
            Translate
            <IconButton
              handler={handlerTranslateVisible}
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
      </tbody>
    </table>
  );
}
