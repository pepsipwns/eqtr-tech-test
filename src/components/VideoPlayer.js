import PropTypes from 'prop-types';

function VideoPlayer(props) {
  return (
    <>
      <div className="container">
        <div className="ratio ratio-21x9">
          <iframe src={props.src} allowFullScreen></iframe>
        </div>
        <p className="pt-3">{props.caption}</p>
      </div>
    </>
  );
}

VideoPlayer.propTypes = {
  src: PropTypes.string,
  caption: PropTypes.string,
};

export default VideoPlayer;
