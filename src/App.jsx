import "./css/App.css";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favourite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
