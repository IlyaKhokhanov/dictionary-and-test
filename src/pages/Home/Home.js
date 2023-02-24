import React from "react";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import "./Home.scss";

export function Home() {
  return (
    <>
      <Header buttonClass='home-btn'>Dictionary and tests</Header>
      <div className='home'>
        <h1 className='home-title'>Select a schoolbook and module</h1>
        <Form />
      </div>
    </>
  );
}
