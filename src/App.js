import Header from './components/header/Header';
import Topnav from './components/header/Topnav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slider from './components/slider/Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from './components/home_views/Category';
import { Testimonial } from './components/home_views/Testimonial';
import Insta from './components/home_views/Insta';
import Newsletter from './components/home_views/Newsletter';
import Footer from './components/slider/footer/Footer';


function App() {
  return (
    <div>    
    <Router>
      <Topnav></Topnav>
      <Header></Header>
      <Slider></Slider>
      <Category></Category>
      <Testimonial></Testimonial>
      <Insta></Insta>
      <Newsletter></Newsletter>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;