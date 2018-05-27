import React , { Component } from 'react';
import { Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import { Button } from '../../Components';
import styles from './style';

export default class HomeScreen extends Component {

  Broadcast = ()=>{
    this.props.navigation.navigate('BroadcastSetup');
  }

  Listen = ()=>{
    this.props.navigation.navigate('ListenSetup');
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Button title="Broadcast" onPress={this.Broadcast.bind(this)}/>
            <Button title="Listen" onPress={this.Listen.bind(this)}/>
          </View>
      </View>
    );
  }
}