import React from 'react';
import PropTypes from 'prop-types';

/**
 * A Show Video component, takes a video and display it.
 * @param {Object} props
 * @param {Object} props.video - Video object from youtube.
 */
function ShowVideo(props) {
  const { video } = props;

  let content;
  if (video) {
    content = (
      <>
        <div className="ui embed">
          <iframe
            title={video.snippet.title}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </>
    );
  } else {
    content = 'Loading...';
  }

  return <div>{content}</div>;
}

ShowVideo.propTypes = {
  video: PropTypes.object,
};

export default ShowVideo;
