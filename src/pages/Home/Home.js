import React from "react";
import Form from "../../components/Form.js/Form";
import Header from "../../components/Header/Header";
import "./Home.scss";

function Home() {
  return (
    <>
      <Header classForBtn='home-btn'>Dictionary and tests</Header>
      <div className='home'>
        <h1 className='home-title'>Select a schoolbook and module</h1>
        <Form />
      </div>
    </>
  );
}

export default Home;
