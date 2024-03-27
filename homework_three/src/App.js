import './App.css';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserInfo from "./pages/UserInfo/UserInfo";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<MainPage/>}/>
                  <Route path={'/users/:id'} element={<UserInfo/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
