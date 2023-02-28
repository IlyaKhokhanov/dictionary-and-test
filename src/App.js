import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";
import { Wordlist } from "./pages/Wordlist";
import { selectedModulesContext } from "./state/selectedModulesContext";

function App() {
  const [checkedModules, setCheckedModules] = useState({});
  const [downloadedSelectedSchoolbook, setDownloadedSelectedSchoolbook] =
    useState({});

  return (
    <selectedModulesContext.Provider
      value={{
        checkedModules,
        setCheckedModules,
        downloadedSelectedSchoolbook,
        setDownloadedSelectedSchoolbook,
      }}>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/wordlist' element={<Wordlist />} />
            <Route path='/test' element={<Test />} />
          </Routes>
        </div>
      </BrowserRouter>
    </selectedModulesContext.Provider>
  );
}

export default App;
