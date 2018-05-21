import React , { Component } from 'react';
import { Text, View, Button, ToastAndroid } from 'react-native';
import styles from './HomeScreen.style';

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
          <Button title="Broadcast" onPress={this.Broadcast} containerViewStyle={styles.mainButton}/>
          <Button title="Listen" onPress={this.Listen} containerViewStyle={styles.mainButton}/>
      </View>
    );
  }
}