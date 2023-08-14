import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Modules
import Login from "./modules/Login/Login";
import Profile from "./modules/Profile/Profile";
import Search from "./modules/Search/Search";
// Components

import NavBar from "./components/NavBar/NavBar";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
