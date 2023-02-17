import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
import Wordlist from "./pages/Wordlist/Wordlist";
import { CheckboxContext } from "./state/CheckboxContext";
import FormReducer from "./state/FormReducer";

function App() {
  const [state, dispatch] = useReducer(FormReducer, []);

  return (
    <CheckboxContext.Provider
      value={{
        state,
        dispatch,
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
    </CheckboxContext.Provider>
  );
}

export default App;
