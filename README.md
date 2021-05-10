# Listify

[![Website status](https://img.shields.io/website?url=https%3A%2F%2Fspotify-listify.herokuapp.com%2F)](https://spotify-listify.herokuapp.com/)

This is a spotify api app giving the user music recomendations based on their listening taste

## Table of contents

* [General information](#general-information)
* [Used technologies](#used-technologies)
* [Access to deployment](#access-to-deployment)

## General information

This is a web app created in React, with the API calls handled by Node.js. Final goals of the project are: displaying the top artists of each user, giving the user recommended music playlists automatically generated based on their listening taste, possibility of modyfying the generated playlists. 

## Used technologies
* [React.js](#react)
* [Styled components](#styled-components)
* [Use scroll position hook](#use-scroll-position-hook)
* [Node.js](#node)
* [Express](#express)
* [Spotify Web API](#spotify-web-api)

### React
Client side rendering handled by [React](https://reactjs.org/). Initial template has been bootstrapped by [Create React App](https://github.com/facebook/create-react-app).

### Styled components
Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components. It also removes the mapping between components and style. [Documentation](https://styled-components.com/docs)

### Use scroll position hook
Use scroll position hook used for animations on top animations site. [Documentation](https://github.com/n8tb1t/use-scroll-position)

### Node
Back-end handled by [Node.js](https://github.com/nodejs)

### Express
For better optymalization [Express](https://github.com/expressjs/express)

### Spotify Web Api
Based on simple REST principles, the Spotify Web API endpoints return JSON metadata about music artists, albums, and tracks, directly from the Spotify Data Catalogue. For more context checkout [official spotify api docs](https://developer.spotify.com/documentation/web-api/).
For ease of use this project uses [Spotify Web API Node](https://github.com/thelinmichael/spotify-web-api-node)


## Access to deployment

Site is available on Heroku:

[Check it out](https://spotify-listify.herokuapp.com)
