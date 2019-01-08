import React from "react";
import Lyrics from "./Lyrics";

const KaraokeDisplay = props => {
  console.log("Inside KaraokeDisplay. Props are", props);
  const currentlyPlayingSong = props.currentlyPlayingSong;

  let title = null;
  let lyrics = "";

  if (currentlyPlayingSong) {
    title = currentlyPlayingSong.title;
    lyrics = currentlyPlayingSong.lyrics;
  }

  return (
    <div className="karaoke-display">
      <h2>{title}</h2>
      <Lyrics lyrics={lyrics} />
    </div>
  );
};

export default KaraokeDisplay;
