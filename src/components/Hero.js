import React from 'react';
import BgImg from '../assets/stock-hero.jpg';
import PropTypes from 'prop-types';

function Hero(props) {
  return (
    <>
      <div
        className="bg-cover-center hero"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="container">
          <div className="text-container col-12 col-md-7 col-lg-5 position-relative">
            <div className="row text-white">
              <div className="col-12">
                <h1>{props.title}</h1>
              </div>
              <div className="col-12 text-yellow">
                <hr />
              </div>
              <div className="col-12">
                <h4>{props.caption}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  caption: PropTypes.string,
};

export default Hero;
