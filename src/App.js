import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BirthdayDinner from "./components/BirthdayDinner";
import Vacation from "./components/Vacation";
import BirthdayOutfits from "./components/BirthdayOutfits";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dinner" element={<BirthdayDinner />} />
        <Route path="/vacation" element={<Vacation />} />
        <Route path="/birthday" element={<BirthdayOutfits />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
