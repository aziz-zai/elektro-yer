import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import Impressum from "./components/Impressum"; // Import the Impressum component
import Datenschutz from "./components/Datenschutz"; // Import the Datenschutz component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Main page with HomeSection, AboutSection, and Footer */}
          <Route
            path="/"
            element={
              <>
                <HomeSection />
                <AboutSection />
                <Footer />
              </>
            }
          />
          
          {/* Separate pages for Impressum and Datenschutz */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
