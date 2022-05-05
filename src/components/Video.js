import React from "react";

function Video({video, title, views, date}) {
  return (
    <>
    <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{title}</h2>
      <p>{views} Views | Uploaded {date}</p>
    </>
  )
}

export default Video