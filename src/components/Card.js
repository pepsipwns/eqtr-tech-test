import bgImg from '../assets/stock-hero.jpg';
import PropTypes from 'prop-types';

function Card(props) {
  return (
    <>
      <div className="card" style={{ backgroundImage: `url('${bgImg}')` }}>
        <div className="card-body">
          <span
            className={`mt-5 mb-3 badge badge-heat badge-${props.temperature}`}
          >
            Hot
          </span>
          <h3 className="card-title">{props.title}</h3>
          <div className="card-text">{props.text}</div>
          <ul className="list-inline mt-auto mb-2">
            <li>
              <a href="#" className="btn btn-link">
                See more
              </a>
            </li>
            <li className="text-yellow pe-2">|</li>
            <li className="">
              <a href="#" className="btn btn-link">
                Talk to us about this
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  temperature: PropTypes.string,
};

export default Card;
