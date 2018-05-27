import { createStackNavigator } from 'react-navigation';
import { HomeScreen, BroadcastScreen, BroadcastSetupScreen, ListenSetupScreen } from './Screens';

export default App = createStackNavigator({
  Home: HomeScreen,
  ListenSetup: ListenSetupScreen,
  BroadcastSetup: BroadcastSetupScreen,
  Broadcast: BroadcastScreen,
});