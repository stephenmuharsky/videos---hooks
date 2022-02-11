import React from "react";
import "./VideoItem.css";
//{video} instead of (props) means we only use the
// props.video prop and no longer have to type props
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    //onVideoSelect called with video as argument
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      {/*ACCESSING THE THUMBNAIL */}
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        {/*VIDEO TITLE*/}
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
