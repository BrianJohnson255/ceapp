import { registerRootComponent } from 'expo';

import Home from './pages/Home';
import Calendar from './pages/Calendar';
import StartUp from './pages/StartUp';
import LogIn from './pages/LogIn';
import SignUpPage from './pages/SignUpPage';
import Production from './pages/Production';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  StartUp: { screen: StartUp },
  Home: { screen: Home },
  Calendar: { screen: Calendar },
  LogIn: { screen: LogIn },
  SignUpPage: { screen: SignUpPage },
  Production: { screen: Production },
});

const App = createAppContainer(MainNavigator);

export default registerRootComponent(App);
