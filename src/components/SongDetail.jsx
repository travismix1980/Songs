import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <div><h2>Please Select a Song</h2></div>;
  }
  return (
    <div>
      <h2>Details For: </h2>
      <p><b>Title: </b>{song.title}</p>
      <p><b>Artist: </b>{song.band}</p>
      <p><b>Duration: </b>{song.duration}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
