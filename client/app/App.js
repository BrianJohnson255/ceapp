import * as React from 'react';
import { registerRootComponent } from 'expo';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Home from './pages/Home';
import Calendar from './pages/Calendar';
import StartUp from './pages/StartUp';
import LogIn from './pages/LogIn';
import SignUpPage from './pages/SignUpPage';
import Production from './pages/Production';
import CreateProduction from './pages/CreateProduction';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  StartUp: { screen: StartUp, navigationOptions: () => ({ header: null })},
  Home: { screen: Home, navigationOptions: () => ({ header: null })},
  Calendar: { screen: Calendar },
  LogIn: { screen: LogIn },
  SignUpPage: { screen: SignUpPage },
  Production: { screen: Production },
  CreateProduction: { screen: CreateProduction, navigationOptions: () => ({ header: null })},
});

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: '#260859',
		accent: 'white',
	},
};

const AppNav = createAppContainer(MainNavigator);
const App = () => (<PaperProvider theme={theme}><AppNav /></PaperProvider>)

export default registerRootComponent(App);
