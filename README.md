# ceapp
Our app for the CEA to help students find film productions, and help student producers find talent.

## Requirements

- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/) (version 3 or greater)

## Setup

In the project root, simply run `docker-compose up`. This will start the npm build server, and a message will be displayed providing info on how to connect to the app. In order to use the QR code or `exp://...` link you'll need the [Expo](https://expo.io/) app on your phone.

The project will automatically rebuild whenever you update files in the `client/ceapp` directory.

In order to run commands on the build server container, including npm commands such as `npm install --save ...`, use this command while your npm build server container is running in another shell: `docker exec ceapp_npm-build-server_1 <command>`. Example: `docker exec ceapp_npm-build-server_1 npm install --save some_package`.

## Page Navigation

When you want to implement navigation, make sure to import the page in the App.js file and add it in the MainNavigator (also in App.js). Also, on your page before the return statement (but still in render(), add the line const {navigate} = this.props.navigation;

## Server

TODO: use Docker for this too

The server uses Ruby 2.6.4, so ensure you have that installed. If you do not have Rails installed run `gem install rails`. Then, inside `server/ceapp`, run `bundle install` to set the project up. Then the server can be run using `rails server`.

## Requirements
	MUST
		Search students based on skills
		Provide outside contact info
		Headshots for actors
		User Accounts that show roles
	SHOULD
		Keyword search for productions
		Star rating for each user
	COULD
		Calendar (get to productions from the calendar)
		Notifications?
		In-app contact
		Faculty View
