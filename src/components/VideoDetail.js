import React from "react";

//FUNCTIONAL COMPONENT
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  //video url
  //this is es 2015 instead of standard string concatenation
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        {/*Embeds the youtube video. 
          we add a title to avoid errors.*/}
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
