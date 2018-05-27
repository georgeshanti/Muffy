import React from 'react';
import { Text, View, ToastAndroid} from 'react-native';
import Broadcaster from '../NetworkTasks/Broadcaster';

export default class BroadcastScreen extends React.Component {

    constructor(props){
        super(props);
        this.broadcaster = new Broadcaster('Trial Run!', 15252);
        this.broadcaster.setMessageListener();
        this.broadcaster.bind();
    }

    render() {
        return (
        <View>
            <Text>Hi</Text>
        </View>
        );
    }
}