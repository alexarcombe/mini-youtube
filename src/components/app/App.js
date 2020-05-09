import React, { useState, useEffect } from 'react';
import SearchBar from '../search-bar/SearchBar';
import youtube from '../../apis/youtube';
import './App.css';
import VideoList from '../video-list/VideoList';
import ShowVideo from '../show-video/ShowVideo';

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const options = (search) => {
  return {
    params: {
      type: 'video',
      part: 'snippet',
      maxResults: 5,
      key: KEY,
      q: search,
    },
  };
};

export default function App() {
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    onSubmit(null, 'New Zealand');
  }, []);

  const onSubmit = async (e, search) => {
    if (e) {
      e.preventDefault();
    }
    const res = await youtube.get('/search', options(search));
    setVideos(res.data.items);
    setCurrent(res.data.items[0]);
  };

  const onClick = (video) => {
    setCurrent(video);
    console.log(video);
  };

  return (
    <div className="app ui container">
      <SearchBar onSubmit={onSubmit} />
      <div className="ui grid" style={{ paddingTop: '10px' }}>
        <div className="ui eight wide column">
          <ShowVideo video={current} />
        </div>
        <div className="ui eight wide column">
          <VideoList videos={videos} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
