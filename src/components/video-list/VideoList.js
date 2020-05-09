import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../video-item/VideoItem';

/**
 * Video List component, creates a list of video items.
 * @param {Object} props
 * @param {Object} props.video - Video object from youtube.
 * @param {function} props.onClick - callback for on click for a Video Item
 */
function VideoList(props) {
  const { videos, onClick } = props;
  const content = videos.map((video) => (
    <VideoItem key={video.id.videoId} video={video} onClick={onClick} />
  ));
  return <div className="ui relaxed divided list">{content}</div>;
}

VideoList.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VideoList;
