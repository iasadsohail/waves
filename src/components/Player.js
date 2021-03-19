import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songInfo,
  setSongInfo,
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  //Styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  const activeLibraryHandler = (song) => {
    const newSongs = songs.map((_song) => {
      if (_song.id === song.id) {
        return {
          ..._song,
          active: true,
        };
      } else {
        return {
          ..._song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };

  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };
  const dragHandler = (e) => {
    setSongInfo({ ...songInfo, currentTime: e.target.value.toString() });
    audioRef.current.currentTime = e.target.value.toString();
  };

  const getTime = (time) => {
    return time
      ? Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      : "0:00";
  };

  const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let newIndex;
    if (direction === "forwards") newIndex = (currentIndex + 1) % songs.length;
    else newIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    await setCurrentSong(songs[newIndex]);
    if (isPlaying) audioRef.current.play();
    activeLibraryHandler(songs[newIndex]);
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <input
            min={0}
            max={songInfo.duration.toString()}
            value={songInfo.currentTime.toString()}
            onChange={dragHandler}
            type="range"
          />
          <div className="animate-track" style={trackAnim}></div>
        </div>
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("backwards")}
          className="play"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler("forwards")}
          className="play"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
