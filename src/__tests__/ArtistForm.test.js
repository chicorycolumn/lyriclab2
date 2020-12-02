import React from "react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import ArtistForm from "../ArtistForm.jsx";

// const server = setupServer(
//   rest.get("/greeting", (req, res, ctx) => {
//     return res(ctx.json({ greeting: "hello there" }));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

test("Unit test for basic functionality of Artist Submission input and button.", () => {
  render(<ArtistForm />);
  expect(screen.getByTestId("artistNameSubmitButton")).not.toHaveAttribute(
    "disabled"
  );

  userEvent.type(screen.getByTestId("artistNameInput"), "all american rejects");
  expect(screen.getByTestId("artistNameInput")).toHaveValue(
    "all american rejects"
  );

  //   fireEvent.click(screen.getByText("Load Greeting"));

  //   await waitFor(() => screen.getByRole("heading"));

  //   expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  //   expect(screen.getByRole("button")).toHaveAttribute("disabled");
});

test("Unit test for basic functionality of Artist Submission input and button.", () => {
  render(<ArtistForm />);
  expect(screen.getByTestId("artistNameSubmitButton")).not.toHaveAttribute(
    "disabled"
  );

  userEvent.type(screen.getByTestId("artistNameInput"), "all american rejects");
  expect(screen.getByTestId("artistNameInput")).toHaveValue(
    "all american rejects"
  );

  //   fireEvent.click(screen.getByText("Load Greeting"));

  //   await waitFor(() => screen.getByRole("heading"));

  //   expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  //   expect(screen.getByRole("button")).toHaveAttribute("disabled");
});

// import React from "react";
// import { render } from "@testing-library/react";
// import ArtistForm from "../ArtistForm.jsx";

// test("Renders component.", () => {
//   const { getByTestId } = render(<ArtistForm />);
//   const artistForm = getByTestId("artistForm");
//   expect(artistForm).toBeDefined();
// });
