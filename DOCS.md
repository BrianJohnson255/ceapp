# Documentation

This page is for documentation and general help/advice when contributing.

## Page Navigation

When you want to implement navigation, make sure to import the page in the App.js file and add it in the MainNavigator (also in App.js). Also, on your page before the return statement (but still in render(), add the line const {navigate} = this.props.navigation;
