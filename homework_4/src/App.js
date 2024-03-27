import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreatPokemonPage from "./pages/createPokemonPage/CreatPokemonPage";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreatPokemonPage/>} path={'/'}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
