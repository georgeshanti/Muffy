import React from 'react';
import { Text, View} from 'react-native';
import Searcher from '../NetworkTasks/Searcher';
import Button from '../Button';

export default class ListenScreen extends React.Component {

  constructor(props){
    super(props);
    this.searcher = new Searcher(15252);
    this.searcher.bind();
  }

  search(){
    this.searcher.ping();
  }

  render() {
    return (
      <View>
        <Button title="Ping" onPress={this.search.bind(this)}/>
      </View>
    );
  }
}