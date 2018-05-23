import { createStackNavigator } from 'react-navigation';
import { HomeScreen, BroadcastScreen, ListenScreen } from './Components';

export default App = createStackNavigator({
  Home: HomeScreen,
  Listen: ListenScreen,
  Broadcast: BroadcastScreen,
});