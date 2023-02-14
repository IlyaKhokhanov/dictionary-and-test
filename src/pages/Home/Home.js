import React from 'react';
import Header from '../../components/Header/Header';
import './Home.scss'

function Home() {
  return (
    <>
      <Header title="Dictionary and tests"/>
      <div className="home">
        <h1 className="home-title">Select a schoolbook and module</h1>
        <form className="home-form">
          <label>
            <input type="checkbox"/> Schoolbook 1
          </label>
          <label>
            <input type="checkbox"/> Schoolbook 2
          </label>
          <label>
            <input type="checkbox"/> Schoolbook 3
          </label>
          <p>
            <button>Wordlist</button>
            <button>Test</button>
          </p>
        </form>
      </div>
    </>
  );
}

export default Home;