import React, { useEffect, useState } from "react";
import { enableMapSet } from "immer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";
import { Wordlist } from "./pages/Wordlist";
import { SelectedModulesContext } from "./state/SelectedModulesContext";

function App() {
  useEffect(() => enableMapSet(), []);
  const [checkedModules, setCheckedModules] = useState(new Map());
  const [downloadedSelectedSchoolbook, setDownloadedSelectedSchoolbook] =
    useState({});

  return (
    <SelectedModulesContext.Provider
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
    </SelectedModulesContext.Provider>
  );
}

export default App;
