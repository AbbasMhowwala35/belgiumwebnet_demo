import React from 'react';
import Slider from '../slider/Slider';
import Category from './Category';
import Insta from './Insta';
import Newsletter from './Newsletter';
import { Testimonial } from './Testimonial';

const Home = () => {
  return (
    <div>
        <Slider />
        <Category />
        <Testimonial />
        <Insta />
        <Newsletter />
    </div>
  ) 
};

export default Home;
