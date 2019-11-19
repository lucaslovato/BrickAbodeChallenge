# Brick Abode Challenge

![BrickAbodeLogo](./src/assets/brick-abode.png)

## How does the project works

The project it's a login and sign up view with the intention of save states on variables work with input changes and then when the main button is pressed show that the values are being saved.

The main file after 'login' it's a home page. It has two button that routes the project for two different views. The first view is the search for all NBA teams or saee an specific conference teams. The second view that can be accessed from home page it's the nba player search view. A table is rendered from an input field. On this input it's possible to search first and or last name and see the returned players that matched with this name on the table.
The logout is being simulated with a exit button on the end of the navbar.

## Project Structure

```

project
│   README.md
│   yarn.lock
│   package.json
│   package-lock.json
│   .gitignore
│   node_modules
│
└───src
│   │   index.js
│   │   index.css
│   │   App.js
│   │
│   └───views
│   │   │   login.js
│   │   │   homeView.js
│   │   │   signUp.js
│   │   │   nbaPlayer.js
│   │   │   nbaTeams.js
│   │
│   └───components
│   │   │   copyright.js
│   │   │   nbaTeamCard.js
│   │   │   footer.js
│   │   │   playerTable.js
│   │   │   toolbar.js
│   │
│   └───assets
│   │   │   nbaLogo
│   │   │   brick-abode.png
│   └───utils
│       │   useStyles.js
│
└───public
    │   index.html
    │   manifest.json
    │   robots.txt

```

## Used Libraries

- [ReactJS](https://en.reactjs.org)
- [React State Hook](https://en.reactjs.org/docs/hooks-state.html)
  - Allow the project on save state and send if necessary, turning the creation of new components dynamic and easily
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
  - Helps the project with paths and routing
- [MaterialUI](https://material-ui.com/)
  - ReactJS css library

## This project was scaffolded using

`npx create-react-app appName`

more infor about create-react-app can be seen [here](https://github.com/facebook/create-react-app).

## Used API

The chosen API was found on a website called [rapidapi](https://rapidapi.com), at the site there's a lot of free apis to use and how to use properly.

The project is using [Free NBA API](https://rapidapi.com/theapiguy/api/free-nba) to find all the NBA teams.

## Usage

First check if npm is installed with:

`npm --version`

If node is not installed follow the instructions [here](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)

Installing dependencies:

`npm install`

Then:

`npm start`

Will serve the project on a computer port, the default it's `3000` but if unavailable the project ask if can run on another port.
