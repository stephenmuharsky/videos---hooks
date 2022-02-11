import React from "react";
import VideoItem from "./VideoItem";

//({videos}) take out just the videos part of the props
//so we dont have to reference it anymore
const VideoList = ({ videos, onVideoSelect }) => {
  //video array passed from app
  //makes each item from array into a VideoItem object
  //pass individual video to the videoitem as a prop
  //we added a key to avoid errors.
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
