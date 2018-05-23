import React , { Component } from 'react';
import { Text, View, ToastAndroid, TouchableOpacity } from 'react-native';
import Button from '../Button';
import styles from './style';

export default class HomeScreen extends Component {

  Broadcast = ()=>{
    // console.log("Broadcasting...");
    this.props.navigation.navigate('Broadcast');
  }

  Listen = ()=>{
    // console.log("Listening...");
    this.props.navigation.navigate('Listen');
  }

  render() {
    return (
      <View style={styles.container}>
          <Button title="Broadcast" onPress={this.Broadcast.bind(this)}/>
          <Button title="Listen" onPress={this.Listen.bind(this)}/>
      </View>
    );
  }
}