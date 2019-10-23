# ceapp
Our app for the CEA to help students find film productions, and help student producers find talent.

## Setup

TODO: use Docker

### Client

Install Node and npm. Inside of `client/ceapp`, run `npm install` to install the necessary packages, then run `npm start` to run the build server.

To preview the app on your phone, ensure you have the Expo app installed. Once installed, you can simply scan the QR code to preview the app.

TODO: mention Windows fix

### Server

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
