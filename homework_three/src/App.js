import './App.css';
import React from "react";
import User from "./components/User";
import UserPage from "./pages/userPage/UserPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserInfo from "./pages/UserInfo/UserInfo";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<UserPage/>}/>
                  <Route path={'/users/:id'} element={<UserInfo/>}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
