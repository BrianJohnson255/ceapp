import Home from './app/pages/Home';
import Calendar from './app/pages/Calendar';
import StartUp from './app/pages/StartUp';
import SignUpPage from './app/pages/SignUpPage';
import Production from './app/pages/Production';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  StartUp: { screen: StartUp },
  Home: { screen: Home },
  Calendar: { screen: Calendar },
  SignUpPage: { screen: SignUpPage },
  Production: { screen: Production },
});

const App = createAppContainer(MainNavigator);

export default App;
