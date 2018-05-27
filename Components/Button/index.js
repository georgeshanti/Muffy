import React , { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class Button extends Component {
  
  render() {
    return (
        <TouchableOpacity style={this.props.style.button} onPress={this.props.onPress}>
            <Text style={this.props.style.text}>{this.props.title}</Text>
        </TouchableOpacity>
    );
  }
}

Button.defaultProps = {
  style:{
    button:{backgroundColor: 'steelblue', paddingVertical: 10, paddingHorizontal: 20, flexDirection:'row', margin:10 },
    text:{color: '#ffffff', fontWeight: '600', fontSize: 18, },
  },
  onPress: ()=>{},
};