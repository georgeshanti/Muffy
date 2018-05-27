import React from 'react';
import { Text, View} from 'react-native';
import Searcher from '../../Components/NetworkTasks/Searcher';
import { Button } from '../../Components';

export default class ListenSetupScreen extends React.Component {

  constructor(props){
    super(props);
    this.searcher = new Searcher(15252);
    this.state = { broadcastList : [] }
    this.searcher.registerBroadcastHandler(this.broadcastHandler.bind(this));
    this.searcher.bind();
  }

  broadcastHandler(broadcastDetails){
      var broadcastList = this.state.broadcastList;
      broadcastList[broadcastDetails['host']]=broadcastDetails;
      this.setState({ broadcastList: broadcastList });
  }

  search(){
    this.searcher.ping();
  }

  render() {
    var broadcast_list = [];
    for (var key in this.state.broadcastList){

      broadcast_list.push((
        <View key={this.state.broadcastList[key].host}>
          <Text>{this.state.broadcastList[key].name}</Text>
          <Text>{this.state.broadcastList[key].host}:{this.state.broadcastList[key].port}</Text>
        </View>
      ));
    };
    return (
      <View>
        <View>
          {broadcast_list}
        </View>
        <Button title="Ping" onPress={this.search.bind(this)}/>
      </View>
    );
  }
}