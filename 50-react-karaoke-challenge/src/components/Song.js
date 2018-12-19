import React from "react";

const Song = props => {
  console.log("In Song. Props are", props);
  const handlePlaySong = props.handlePlaySong;
  const { title, singer, id, plays } = props.songData;
  //console.log(title, singer);
  //console.log("Song id is", id);
  return (
    <tr className="song">
      <td>{title}</td>
      <td>{singer}</td>
      <td>{plays}</td>
      <td>
        <button onClick={() => handlePlaySong(id)}>Play</button>
      </td>
    </tr>
  );
};

export default Song;

//var config {method:"PATCH",headers:{"Content-Type":"application/json"}}