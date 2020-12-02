import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import ArtistForm from "../ArtistForm.jsx";
import App from "../App.jsx";
import axiosMock from "axios";

afterEach(cleanup);

test("Unit test for basic functionality of ArtistForm's input and button.", () => {
  render(<ArtistForm />);
  expect(screen.getByTestId("artistNameSubmitButton")).not.toHaveAttribute(
    "disabled"
  );

  userEvent.type(screen.getByTestId("artistNameInput"), "all american rejects");
  expect(screen.getByTestId("artistNameInput")).toHaveValue(
    "all american rejects"
  );
});

test("Unit test for whether ArtistForm fetches and displays data.", async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      results: [
        {
          wrapperType: "artist",
          artistType: "Artist",
          artistName: "Red Hot Chili Peppers",
          artistLinkUrl:
            "https://music.apple.com/us/artist/red-hot-chili-peppers/889780?uo=4",
          artistId: 889780,
          amgArtistId: 5241,
          primaryGenreName: "Alternative",
          primaryGenreId: 20,
        },
      ],
    },
  });

  const { getByTestId } = render(<App />);

  userEvent.type(screen.getByTestId("artistNameInput"), "hot chilli");
  userEvent.click(screen.getByTestId("artistNameSubmitButton"));

  expect(getByTestId("loadingArtistsText")).toHaveTextContent("Loading...");

  const resolvedResult = await waitFor(() => getByTestId("artistResult"));

  expect(resolvedResult).toHaveTextContent(
    "Red Hot Chili Peppers (Alternative)"
  );

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});
