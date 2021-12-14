import React from 'react';
import BgImg from '../assets/stock-hero.jpg';

function Hero() {
  return (
    <>
      <div
        className="bg-cover-center hero"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="col-6">
          <div className="row">
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
