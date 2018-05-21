import React from 'react';
import { Text, View, ToastAndroid} from 'react-native';

export default class BroadcastScreen extends React.Component {

    render() {
        console.log(this.zeroconf.getServices());
        return (
        <View>
            <Text>{this.state.text}</Text>
        </View>
        );
    }
}