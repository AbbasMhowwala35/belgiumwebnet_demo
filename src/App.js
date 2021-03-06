import Header from "./components/header/Header";
import Topnav from "./components/header/Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/footer/Footer";
import About from "./components/pages/About";
import RingBuilder from "./components/pages/RingBuilder";
import "./assets/css/theme.css";
import Home from "./components/home_views/Home";
import Contact from "./components/home_views/Contact";
import Shop from "./components/home_views/Shop";
import Login from "./components/home_views/Login";
import Diamond from "./components/pages/Diamond";
const pageSize = 6;
function App() {
  return (
    <div>
      <BrowserRouter>
        <Topnav />
        <Header />        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" pageSize={pageSize} element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ring-builder" element={<RingBuilder />} />
          <Route path="/diamonds" element={<Diamond />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
