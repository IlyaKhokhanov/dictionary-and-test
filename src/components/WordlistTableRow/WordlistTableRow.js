import React, { useContext, useMemo } from "react";
<<<<<<< HEAD
import { IconButton } from "../buttons/IconButton";
import { selectedModulesContext } from "../../state/selectedModulesContext";
import { capitaliseWord } from "../../utils/capitaliseWord";
import { filteredWords } from "../../utils/filterWords";
import { speakWord } from "../../utils/speakWord";

export function WordlistTableRow(props) {
  const { wordsVisible, translateVisible } = props;

  const { checkedModules, downloadedSelectedSchoolbook } = useContext(
    selectedModulesContext
  );

  const memoData = useMemo(
    () => filteredWords(checkedModules, downloadedSelectedSchoolbook),
    [checkedModules, downloadedSelectedSchoolbook]
  );

  function speakHandler(e) {
    speakWord(e.target.name);
=======
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
>>>>>>> 84552f0a5f087fe6eea15911cc12cc3a02ef97e4
  }

  return (
    <>
<<<<<<< HEAD
      {memoData.map((wordObject, index) => (
        <tr key={wordObject.word} className='table-row'>
          <td className='table-cell'>{index + 1}</td>
          <td className={`table-cell ${wordsVisible ? "hidden" : ""}`}>
            {capitaliseWord(wordObject.word)}
            <IconButton
              handler={speakHandler}
              image={"../../img/speaker.svg"}
              descriptionImg={"speak word"}
              spokenWord={wordObject.word}
            />
          </td>
          <td className={`table-cell ${wordsVisible ? "hidden" : ""}`}>
            {wordObject.transcription}
          </td>
          <td className={`table-cell ${translateVisible ? "hidden" : ""}`}>
            {capitaliseWord(wordObject.translation)}
=======
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
>>>>>>> 84552f0a5f087fe6eea15911cc12cc3a02ef97e4
          </td>
        </tr>
      ))}
    </>
  );
}
<<<<<<< HEAD
=======

export default WordlistTableRow;
>>>>>>> 84552f0a5f087fe6eea15911cc12cc3a02ef97e4
