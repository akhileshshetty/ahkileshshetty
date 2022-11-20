import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import WebsiteHeader from "./components/header";
import HomePage from "./pages/home/home";
import AboutPage from "./pages/about";
import PaintingsPage from "./pages/paintings";
import PhotographyPage from "./pages/photography";
import FilmographyPage from "./pages/filmography/filmography";
import WebsiteFooter from "./components/footer";

function App() {
  useEffect(()=>{
    document.title= "Akhilesh Shetty";
  });
  return (
    <div className="App">
      <WebsiteHeader />
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/shetty-website" element={<HomePage/>} exact/>
        <Route path="/filmography" element={<FilmographyPage/>}/>
        <Route path="/photography" element={<PhotographyPage/>}/>
        <Route path="/paintings" element={<PaintingsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
      <WebsiteFooter/>
    </div>
  );
}

export default App;
