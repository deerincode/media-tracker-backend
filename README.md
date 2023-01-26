# Media Tracking App (Front-end)
## Introduction
This is the back-end for full MERN stack application that is designed to allow the user to create collections of different media (movies, videogames, albums, etc). Each model can contain various details about the specific kind of media (title, release year, creators, etc), reviews/notes about the media, and tracking for if the piece of media has been watched/played/etc. The current build has full CRUD functionality for both Movie and Videogame models.

[Media Tracker Deployed App](https://vogue-mediatracker-app.onrender.com/)

[Media Tracker Deployed Back-end (Movies)](https://github.com/deerincode/media-tracker-backend/movies)

[Media Tracker Deployed Back-end (Videogames)](https://github.com/deerincode/media-tracker-backend/videogames)

[Back-end Repository](https://github.com/deerincode/media-tracker-backend)

## Technologies Used
- HTML
- Javascript
- Express
- Node.js
- Mongoose
- MongoDB
- Render Cloud Application Hosting


## Getting Started
-----
#### Step 1: Clone the repo

To clone the repository, use the following command in your terminal.
### `git clone https://github.com/deerincode/media-tracker-backend`

#### Step 2: Install Required Packages

In terminal, navigate your current working directory to `./mediatracker-express`, followed with the below command:

### `npm install`

#### Step 3: Configuration

Create a .env file in the root of the backend directory and insert the following:
- `MONGODB_URI` variable with the access link to your database
- `PORT` variable with chosen port number

#### Step 4: Run the app

In terminal, use following command to start the application 

`node server.js`

You can now access the backend application using `http://localhost:3001`(assuming default port)

#### Step 5: Seed your collections

To seed the databases for each model, use the following URL:

`http://localhost:3001/seed`

## Unsolved Problems
No current known issues

## Future Enhancements
- Addition models for different types of media

