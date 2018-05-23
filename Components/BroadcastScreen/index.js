import React from 'react';
import { Text, View, ToastAndroid} from 'react-native';

export default class BroadcastScreen extends React.Component {

    render() {
        return (
        <View>
            <Text>{this.state.text}</Text>
        </View>
        );
    }
}