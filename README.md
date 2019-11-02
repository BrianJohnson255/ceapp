# ceapp

Our app for the CEA to help students find film productions, and help student producers find talent.

## Requirements

- [Docker](https://www.docker.com/)
- [docker-compose](https://docs.docker.com/compose/install/)

## Setup

To run the project, simply run `docker-compose up -d` in the project root.

To connect to the npm build server, first install the [Expo](https://expo.io/) app on your phone. Then, while the project is running, run `docker-compose logs -f npm-build-server` to view a QR code that will open the project in the Expo app. The project will then be saved in Expo for easy access. Alternatively, you can email or text yourself the link `exp://<ip>`, where `<ip>` is the internal ip of the computer the project is running on.

To stop the project use `docker-compose down` (it may take a bit).

## Contributing

The project will automatically update whenever you update files in the `client` or `server` directories.

The `docker-compose logs -f npm-build-server` and `docker-compose logs -f server` commands can be used to see the output of the containers to view errors and logs.

Check out `DOCS.md` for more advice/help.
