import React from "react";
import Header from "../../components/Header/Header";
import WordlistTable from "../../components/WordlistTable/WordlistTable";

function Wordlist() {
  return (
    <>
      <Header className='wordlist'>Wordlist</Header>
      <WordlistTable />
    </>
  );
}

export default Wordlist;
