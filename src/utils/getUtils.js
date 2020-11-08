import axios from "axios";

export const fetchArtists = (artistName) => {
  let formattedArtistName = artistName.replace(/\s/g, "+");

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
      return res.data;
    })
    .then((data) => {
      return data.results;
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
