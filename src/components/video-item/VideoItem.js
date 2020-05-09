import React from 'react';
import PropTypes from 'prop-types';
import './VideoItem.css';

/**
 * A Video Item component.
 * @param {Object} props
 * @param {Object} props.video - Video object from youtube.
 * @param {function} props.onClick - callback for on click
 */
function VideoItem(props) {
  const { video, onClick } = props;
  const { title, description, thumbnails } = video.snippet;
  return (
    <div className="item video-item" onClick={() => onClick(video)}>
      <img
        className="ui image"
        src={thumbnails.default.url}
        alt="Video Thumbnail"
      />
      <div className="content">
        <a className="header" href="#">
          {title}
        </a>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VideoItem;
