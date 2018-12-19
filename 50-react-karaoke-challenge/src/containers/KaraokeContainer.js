import React, { Component } from "react";
import Filter from "../components/Filter";
import SongList from "../components/SongList";
import KaraokeDisplay from "../components/KaraokeDisplay";
//import songs from "../data/songs";

const apiAddress = "http://localhost:4000/users/1/songs";

class KaraokeContainer extends Component {
  state = {
    songs: [],
    currentlyPlayingSongId: null,
    searchTerm: ""
  };

  componentDidMount() {
    fetch(apiAddress)
      .then(r => r.json())
      .then(songs => this.setState({ songs }));
  }

  handlePlaySong = currentlyPlayingSongId => {
    if (currentlyPlayingSongId !== this.state.currentlyPlayingSongId) {
      this.setState({ currentlyPlayingSongId: currentlyPlayingSongId }, () => {
        console.log("Currently playing song is", this.currentlyPlayingSong());
        this.recordPlayOnBackend(currentlyPlayingSongId).then(r => {
          if (r.status === 200) {
            this.recordPlayInState(currentlyPlayingSongId);
          }
        });
        // optimistic rendering
        // this.recordPlayInState(currentlyPlayingSongId);
      });
    }
  };

  updateSearchTerm = event => {
    const searchTerm = event.target.value;
    console.log("searchTerm is ", searchTerm);
    this.setState({ searchTerm: searchTerm });
  };

  songsToDisplay = () =>
    this.state.songs.filter(s =>
      s.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

  currentlyPlayingSong = () =>
    this.state.songs.find(s => s.id === this.state.currentlyPlayingSongId);

  recordPlayOnBackend = songId => {
    const config = {
      method: "PATCH"
    };
    return fetch(`${apiAddress}/${songId}/play`, config);
  };

  recordPlayInState = songId => {
    const songs = this.state.songs.map(s => {
      if (s.id === songId) {
        return { ...s, plays: s.plays + 1 };
      } else {
        return s;
      }
    });
    this.setState({ songs });
  };

  render() {
    const songs = this.songsToDisplay();
    const handlePlaySong = this.handlePlaySong;
    const currentlyPlayingSong = this.currentlyPlayingSong();
    const updateSearchTerm = this.updateSearchTerm;
    const searchTerm = this.state.searchTerm;
    console.log("currentlyPlayingSong is", currentlyPlayingSong);
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter updateSearchTerm={updateSearchTerm} searchTerm={searchTerm} />
          <SongList songs={songs} handlePlaySong={handlePlaySong} />
        </div>
        <KaraokeDisplay currentlyPlayingSong={currentlyPlayingSong} />
      </div>
    );
  }
}

export default KaraokeContainer;
