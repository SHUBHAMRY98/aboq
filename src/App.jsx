import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import WebDesigning from "./components/web-design/WebDesigning";
import WebDevelopment from "./components/web-development/WebDevelopment";
import GraphicsDesigning from "./components/graphics-designing/GraphicsDesigning,";
import GoogleAds from "./components/google-ads/GoogleAds";
import Seo from "./components/seo/Seo";
import Smm from "./components/smm/Smm";

import ScrollToTop from './scrollToTop'; // Import karein
import Footer from "./components/footer/Footer";
import { Import } from "lucide-react";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-designing" element={<WebDesigning />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/graphics-designing" element={<GraphicsDesigning />} />
        <Route path="/google-ads" element={<GoogleAds />} />
        <Route path="/search-engine-optimization" element={<Seo />} />
        <Route path="/social-media-marketing" element={<Smm />} />
      </Routes>


      <Footer/>
    </Router>
  );
}

export default App;
