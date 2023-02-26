import React, { useContext, useMemo } from "react";
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
  }

  return (
    <>
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
          </td>
        </tr>
      ))}
    </>
  );
}
