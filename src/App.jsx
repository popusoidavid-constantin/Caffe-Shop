import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import "./App.css";
import MainNavigation from "./shared/Navigation/MainNavigation";
import { useEffect } from "react";
import Home from "./Pages/Home";
import Food from "./Pages/Food";
import Coffee from "./Pages/Coffee";
import AboutUs from "./Pages/AboutUs";
import Footer from "./shared/UIElements/Footer";
import ScrollToTop from "./shared/Navigation/ScrollToTop";

import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Altceva Caffe";
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Navigate to="/" replace />}></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
