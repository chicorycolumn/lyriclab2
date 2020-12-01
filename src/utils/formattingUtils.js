export const formatSongData = (songsOriginal) => {
  const songs = songsOriginal.map((song) => {
    return { ...song };
  });

  const organisedSongs = [];

  songs.forEach((song) => {
    const { trackName } = song;

    song.baseTrackName = /\s\(/.test(trackName)
      ? trackName.slice(0, trackName.indexOf(" ("))
      : trackName;

    const matchingSongObjects = organisedSongs.filter((organisedSong) => {
      return (
        organisedSong.baseTrackName &&
        organisedSong.baseTrackName.toLowerCase() ===
          song.baseTrackName.toLowerCase()
      );
    });

    if (matchingSongObjects.length) {
      matchingSongObjects[0].songVersions.push(song);
    } else {
      organisedSongs.push({
        baseTrackName: song.baseTrackName,
        songVersions: [song],
      });
    }
  });

  organisedSongs.forEach((organisedSongObject) => {
    const trackTimes = organisedSongObject.songVersions.map((song) => {
      return song.trackTimeMillis;
    });
    organisedSongObject.averageTrackTimeMillis = trackTimes.length
      ? trackTimes.reduce((a, b) => a + b, 0) / trackTimes.length
      : 0;

    organisedSongObject.collectionNames = organisedSongObject.songVersions.map(
      (song) => {
        return song.collectionName;
      }
    );
  });

  return organisedSongs;
};

export const convertMillisecondsToMinutes = (ms) => {
  return (
    Math.floor(ms / 1000 / 60) +
    ":" +
    (Math.floor((ms / 1000) % 60) / 100).toFixed(2).toString().slice(2)
  );
};
