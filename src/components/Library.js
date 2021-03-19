import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setSongs,
  setCurrentSong,
  libraryStatus,
  isPlaying,
  audioRef,
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            setCurrentSong={setCurrentSong}
            song={song}
            songs={songs}
            setSongs={setSongs}
            isPlaying={isPlaying}
            audioRef={audioRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
