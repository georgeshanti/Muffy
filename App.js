import { createStackNavigator } from 'react-navigation';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import ListenScreen from './Components/ListenScreen/ListenScreen';
import BroadcastScreen from './Components/BroadcastScreen/BroadcastScreen';

export default App = createStackNavigator({
  Home: HomeScreen,
  Listen: ListenScreen,
  Broadcast: BroadcastScreen,
});