import React from "react";
import Song from "../components/Song";

const SongList = props => {
  console.log("In SongList. Props are ", props);
  const handlePlaySong = props.handlePlaySong;
  const songs = props.songs;
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {songs.map(s => (
          <Song key={s.id} songData={s} handlePlaySong={handlePlaySong} />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
