# LyricLab 2

## Description

A simple React app where users can search musicians by name, and then retrieve a lists of their songs, and finally see lyrics for those songs.

## Instructions

You can download this repository and run the project locally by following these steps:

1. Fork this repository by clicking the button labelled 'Fork' on the [project page](https://github.com/chicorycolumn/lyriclab.git).
   <br/>
   Copy the url of your forked copy of the repository, and run `git clone the_url_of_your_forked_copy` in a Terminal window on your computer, replacing the long underscored word with your url.
   <br/>
   If you are unsure, instructions on forking can be found [here](https://guides.github.com/activities/forking/) or [here](https://www.toolsqa.com/git/git-fork/), and cloning [here](https://www.wikihow.com/Clone-a-Repository-on-Github) or [here](https://www.howtogeek.com/451360/how-to-clone-a-github-repository/).

2. Open the project in a code editor, and run `npm install` to install necessary packages. You may also need to install [Node.js](https://nodejs.org/en/) by running `npm install node.js`.

3. Run `npm start` to open the project in development mode.
   <br/>
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Testing

Run the command `npm run cy`. This will bring up the testing window. From here you can click the test files, and the tests should automatically run and show you the results.

## Built with

- [JavaScript](https://www.javascript.com/) - The primary coding language
- [VisualStudioCode](https://code.visualstudio.com/) - The code editor
- [React](https://reactjs.org/) - The frontend framework
- [CSS Modules](https://github.com/css-modules/css-modules) - The design organisation system

## Self-appraisal

Further work needed on this app:

- The lyrics API does not consistently return lyrics, especially if you click the same song again, after viewing the lyrics and then closing the modal. I should have investigated and troubleshooted this further. This is a critical issue.

- The CSS needs to be greatly improved. The lyrics display could benefit from being a separate panel that slides in from the side, rather than a crude overlay. The table is crowded together and needs to be made more accessible for visually impaired people.

- The app needs more immediate feedback in terms of telling the user when it is loading data, or waiting for a response from the API. I added this for the Artist Search - it will tell you that it is loading, and then either display or not display results, giving you feedback both ways. This needs to be implemented for all parts of the app, that is, searching for songs, and searching for lyrics. The user needs to be told whether lyrics simply weren't found, or whether they are being loaded and it is taking time.

- I found the iTunes API to yield more useful data than the MusicBrainz API. However, one issue with the former is that it lists different versions of the same song by the same artist (eg Live vs Studio) as separate tracks, which is redundant for a site that is primarily focused on giving lyrics to the user. In the last fifteen minutes I was building a formatting util that would condense different versions of tracks together into arrays, so Yellow Submarine (Live) and Yellow Submarine (Remastered) and Yellow Submarine (Original) would all appear as one listing. It would also give an average track length between the different versions.
