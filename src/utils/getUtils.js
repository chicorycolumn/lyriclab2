import axios from "axios";

export const fetchArtistsAsync = async (artistName) => {
  const formattedArtistName = artistName.replace(/\s/g, "+");

  try {
    const res = await axios.get(
      "https://itunes.apple.com/search?term=" +
        formattedArtistName +
        "&entity=musicArtist&limit=500",
      {
        headers: {
          "User-Agent":
            "AireLogic tech test ( chrismatusemail at gmail dot com )",
        },
      }
    );
    return res.data.results;
  } catch (err) {
    if (err.response) {
      console.log(err.response);
      if (err.response === "404") {
        console.log("Show a 404 page");
      }
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err);
    }
  }
};

export const fetchArtists = (artistName) => {
  const formattedArtistName = artistName.replace(/\s/g, "+");

  return axios
    .get(
      "https://itunes.apple.com/search?term=" +
        formattedArtistName +
        "&entity=musicArtist&limit=500",
      {
        headers: {
          "User-Agent":
            "AireLogic tech test ( chrismatusemail at gmail dot com )",
        },
      }
    )
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
        if (err.response === "404") {
          console.log("Show a 404 page");
        }
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log(err);
      }
    });
};

export const fetchSongsAsync = async (artistName, artistId) => {
  try {
    const res = await axios.get(
      "https://itunes.apple.com/lookup?id=" +
        artistId +
        "&entity=song&limit=500",
      {
        headers: {
          "User-Agent":
            "AireLogic tech test ( chrismatusemail at gmail dot com )",
        },
      }
    );
    return res.data.results.filter(
      (item) => item.wrapperType === "track" && item.kind === "song"
    );
  } catch (err) {
    if (err.response) {
      console.log(err.response);
      if (err.response === "404") {
        console.log("Show a 404 page");
      }
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err);
    }
  }
};

export const fetchSongs = (artistName, artistId) => {
  return axios
    .get(
      "https://itunes.apple.com/lookup?id=" +
        artistId +
        "&entity=song&limit=500",
      {
        headers: {
          "User-Agent":
            "AireLogic tech test ( chrismatusemail at gmail dot com )",
        },
      }
    )
    .then((res) => {
      return res.data.results.filter(
        (item) => item.wrapperType === "track" && item.kind === "song"
      );
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
        if (err.response === "404") {
          console.log("Show a 404 page");
        }
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log(err);
      }
    });
};

export const fetchLyricsAsync = async (artistName, trackName) => {
  try {
    const res = await axios.get(
      "https://api.lyrics.ovh/v1/" + artistName + "/" + trackName,
      {
        headers: {
          "User-Agent":
            "AireLogic tech test ( chrismatusemail at gmail dot com )",
        },
      }
    );
    return res.data.lyrics;
  } catch (err) {
    if (err.response) {
      console.log(err.response);
      if (err.response === "404") {
        console.log("Show a 404 page");
      }
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(err);
    }
  }
};

export const fetchLyrics = (artistName, trackName) => {
  return axios
    .get("https://api.lyrics.ovh/v1/" + artistName + "/" + trackName, {
      headers: {
        "User-Agent":
          "AireLogic tech test ( chrismatusemail at gmail dot com )",
      },
    })
    .then((res) => {
      return res.data.lyrics;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response);
        if (err.response === "404") {
          console.log("Show a 404 page");
        }
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log(err);
      }
    });
};
