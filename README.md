# ceapp

Our app for the CEA to help students find film productions, and help student producers find talent.

## Requirements

- [Node + npm](https://nodejs.org/en/) (node version 12 or greater)
- Ruby 2.6.4
- Rails 6.0.0

## Setup

### React Native app

For the React Native app, copy `client/app/env.js.example` over to a file named `client/app/env.js`, and replace the value of the `apiHost` variable with your internal ip (in the new file you copied over). Then in the client directory, run `npm install` to install dependencies. Once installed, use `npm start` to start the expo build server.

To connect to the first install the [Expo](https://expo.io/) app on your phone. You'll see a QR code that will open the project in the Expo app after you run `npm start`. The project will then be saved in Expo for easy access. Alternatively, you can email or text yourself the link `exp://<ip>`, where `<ip>` is the internal ip of the computer the project is running on. Your phone will need to be on the same wifi network as the computer running the project.

### Backend server

To setup the server, run `bundle install` in the `server` directory. Once done, run `rails server -b 0.0.0.0 -p 3000` to start the server.
