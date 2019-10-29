import Home from './app/pages/Home';
import Calendar from './app/pages/Calendar';
import StartUp from './app/pages/StartUp'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  StartUp: { screen: StartUp },
  Home: { screen: Home },
  Calendar: { screen: Calendar },
});

const App = createAppContainer(MainNavigator);

export default App;
